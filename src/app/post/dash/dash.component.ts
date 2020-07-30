import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { AuthService } from '../../auth.service'
import { PostModel } from "../PostModel.model";
import { UserModel } from "../../shared/UserModel.model"
import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})


export class DashComponent implements OnInit {

  constructor(public postService: PostService, public _route: Router) { }
  
  posts = PostModel[""];
  loginUser = UserModel[""]
  isMenuOpen = true;

  imageWidth:number= 400;
  imageMargin: number =20;

  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]

  ngOnInit(): void {
     this.postService.dashPosts()
     .subscribe( res => this.posts = res,
      err => {
          if( err instanceof HttpErrorResponse) {
           if (err.status === 401) {

            this._route.navigate(["/login"]);
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

}   //the end
