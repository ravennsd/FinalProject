import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { AuthService } from '../../auth.service'
import { PostModel } from "../PostModel.model";
import { UserModel } from "../../shared/UserModel.model"
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})


export class DashComponent implements OnInit {

  constructor(public postService: PostService, public _route: ActivatedRoute, public http: HttpClient,public router: Router) { }
  
  posts = PostModel[""];
  loginUser = UserModel[""]
  isMenuOpen = true;
  // imageSrc: string;
  editing: boolean = false;
  imageWidth:number= 400;
  imageMargin: number =20;

  contentMargin = 240;

  ngOnInit(): void {
     this.getDashPosts();
     }
  
     getDashPosts(){
      this.postService.dashPosts()
      .subscribe( res => this.posts = res,
       err => {
           if( err instanceof HttpErrorResponse) {
            if (err.status === 401) {
 
             this.router.navigate(["/login"]);
            }
           }
        })
     }

   toggleDashTool() {
    console.log("On toolbar toggled", this.isMenuOpen)
    this. isMenuOpen = !this.isMenuOpen

    
    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
   }

   delete(id){
    console.log(id);
    this.postService.deletePost(id)
    .subscribe(data=>{console.log(data)
    console.log("deleted");
    alert("Post Deleted");
    location.reload();
  })
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
    this.router.navigate(['/dash'])
}  

}//the end
