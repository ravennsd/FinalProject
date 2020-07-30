import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from '../../post.service';
import { PostModel } from "../PostModel.model";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  baseUrl = 'http://localhost:3100';
  id;
  posts = PostModel[""];
  imageWidth:number= 400;
  imageMargin: number =20;
  // image: File = null;
  // imageSrc: string;
  editing: boolean = false;
  constructor(public _route: ActivatedRoute, public postService: PostService, public router: Router, public http: HttpClient){
    // this.posts = this.router.getCurrentNavigation().extras.state;
    // this.imageSrc = `${(this.baseUrl)}/assets/${this.posts.image}`;
  }
   
  
  editInit(post){
    const id = this._route.snapshot.params.id;
    console.log(id);
    this.postService.editPost(id, post).
    subscribe((post)=> {
      console.log(post)
      this.posts = post
    })
    this.editing = false
    this.router.navigate(['/'])
    
  }
  ngOnInit(): void {
    this.getPost()
  }
  getPost(): void{
    console.log(this._route.snapshot.params.id)
      
    const id = this._route.snapshot.params.id; 
     this.posts = this.postService.getPostData(id)
      .subscribe(post=>{
            this.id = post['_id']
            console.log(post);
            this.posts = post
      })
  }

  delete(id){

    console.log(id)
    this.posts = this.postService.deleteP(id)
    .subscribe(data=>{console.log(data)
    console.log("deleted");
    alert("Post Deleted");
    this.router.navigate(['/']);
    })
  }

  // selectImage(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.image = file;
  //   }
  //   const reader = new FileReader();

  //   if(event.target.files && event.target.files.length) {
  //     reader.readAsDataURL(event.target.files)
  //     reader.onload = () => {
  //     this.imageSrc = reader.result as string;

  //     };

  //   }
  // }
  // onSubmit(){
  //   const formData = new FormData();
  //   formData.append('file', this.image);
  //   let item = this.posts
  //   for ( let key in item ) {
  //     formData.append(key, item[key]);
  //   }
  //   this.http.post<any>('http://localhost:3100', formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }

}

