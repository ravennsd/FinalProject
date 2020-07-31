import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostModel } from './PostModel.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  // description:string= "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, ve"
posts : PostModel[];
imageWidth:number= 300;
  imageMargin: number =20;
  image1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Ffuture%2Farticle%2F20190911-what-would-happen-if-all-the-worlds-trees-disappeared&psig=AOvVaw0ShZlcJopKltym1-BdPEhH&ust=1596289418622000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC-otLP9-oCFQAAAAAdAAAAABAJ"
  

  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit(): void {
    this.getPosts();
  }
getPosts(){
  this.postService.getPosts().
  subscribe((data)=>{
    console.log(data);
    this.posts= JSON.parse(JSON.stringify(data));
  });
}

  DeletePost(id){
    console.log(id);
    this.postService.deletePost(id)
    .subscribe(data=>{console.log(data)
    console.log("deleted");
    alert("Post Deleted");
    location.reload();
  })
  }

 
}
