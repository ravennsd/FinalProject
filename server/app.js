const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const app = express();
var multer = require('multer');

var db = mongoose.connect('mongodb://localhost:27017/PostsDB', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/assets', express.static('assets'))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION");
  next();
});

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});
var User = mongoose.model('users', userSchema, 'users');

const postSchema = new Schema({
  title: String,
  authorID: String,
  author: String,
  description: String,
  published: Date,
  image: String
})
var postData = mongoose.model('posts', postSchema, 'posts');

app.get("/", (req, res) => {
  res.send("Hello from the server");
})

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized Request");
  }
  let token = req.headers.authorization.split(' ')[1].toString();
  if (token === 'null') {
    return res.status(401).send("Unauthorized Request");
  }
  let payload = jwt.verify(token, 'secretkey')
  if (!payload) {
    return res.status(401).send("Unauthorized Request");
  }
  req.userId = payload.subject
  next()
}

app.get("/posts", (req, res) => {
  postData.find()
    .then(function (posts) {
      res.send(posts);
    })
})

app.get('/posts/:id', function (req, res) {
  console.log(req.params.id);
  postData.findOne
    ({ _id: req.params.id }).exec().then(
      data => {
        res.status(200).json(data)
        console.log(data);
      }
    ).catch(e => console.log(e))
})

app.get('/dash/:id', function (req, res) {
  
  console.log(req.params.id);
  postData.findOne
    ({ _id: req.params.id }).exec().then(
      data => {
        res.status(200).json(data)
        console.log(data);
      }
    ).catch(e => console.log(e))
})



app.get('/dash', verifyToken, (req, res, err) => {
  // let _id = req.params.id;
  postData.find()
    .then(data => {
      console.log(data)
      res.send(data)
    })
  err => console.log(err);
})


const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, path.join(__dirname, "./public"))
  },
  filename: (req, file, callBack) => {

    callBack(null, Date.now() + `${file.originalname}`)
  }
})
const fileFilter = (req,res,err) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === "image/png" || file.mimetype === 'image/jpg'){
    cb(null,true);}
    else{
      cb(null,false);
    }
  }


const upload = multer({ storage: storage, fileFilter: fileFilter }).single('image');
// app.post('/assets', upload, )
// console.log(req.body);
// console.log(req.file);

app.post("/create", (req,res) => {
 upload(req,res,function(err){

   console.log(req.body)
   console.log('==================================')
   console.log(req.file)
  var post = {
    title: req.body.post.title,
    description: req.body.post.description,
    authorID: req.body.post.authorID,
    author: req.body.post.author,
    image: req.file.originalname,
    published: req.body.post.published
  }
  var post = new postData(post);
  post.save().then(
    (data)=>{
      res.status(200).json(data)
    }
  ) 
 }) 
});

app.put(('/update/:id'), (req, res, next) => {
  
    console.log(req.body);
    var post = {
      title: req.body.title,
      description: req.body.description,
      image: req.file.originalname
    }
    console.log(req.body._id);
    _id = req.body._id
    postData.findByIdAndUpdate(_id, post).exec()
      .then(post => {
        res.status(200).json(post)
        console.log('Data updated successfully')
      })
  })

//let upload = multer({ dest: 'uploads/' })

app.post('/file', upload, (req, res, next) => {
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file);
})

app.post('/delete', (req, res) => {
  console.log(req.body.post);
  postData.deleteOne({ _id: req.body.id })
    .then(post => {
      res.status(200).send(post)
    })
})
app.post('/delete/:id', (req, res) => {
  postData.deleteOne({ _id: req.body.id })
    .then(post => {
      res.status(200).send(post)
    })
})

  app.post('/signup', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)
      }

      else {
        let payload = { subject: registeredUser._id }
        let token = jwt.sign(payload, 'secretkey')
        res.status(200).send({ token })
        //object {token} replaces the registerUserDetails
      }
    })
  })
  app.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (err, user) => {
      if (err) {
        console.log(err)
      } else if (!user) {
        res.status(401).send('Invalid Email');
      } else if (user.password !== userData.password) {
        res.status(401).send('Invalid Password');
      }
      else {
        let payload = { subject: user._id }
        let token = jwt.sign(payload, 'secretkey')
        res.status(200).send({ token })
      }
    })
  })

  app.listen(3100)
