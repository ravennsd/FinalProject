import { Component, OnInit } from '@angular/core';
import { PostModel } from '../PostModel.model';
import { PostService } from '../../post.service'
import { Router, ActivatedRoute } from '@angular/router'
import { Route, createViewChild } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../auth.service'
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit {

  title: string
  description: string
  saving = 'Create Post'

  // uploadPercent: Observable<number>
  // downloadURL: Observable<string>
  // image: File = null;
  // image: string
  // imageUrl: string;
  // @createViewChild('fileInput', {static: false})fileInput: HasElementRef;

  constructor(public postService: PostService,public _route: Router ,  private auth: AuthService, public _http: HttpClientModule, private http: HttpClient) { }
 
  postItem = new PostModel(null,null,null,null,null,null);

  ngOnInit(): void {
    
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
  //     this.imageUrl = reader.result as string;

  //     };

  //   }
  // }
  // onSubmit(){
  //   const formData = new FormData();
  //   formData.append('file', this.image);
  //   let item = this.postItem
  //   for ( let key in item ) {
  //     formData.append(key, item[key]);
  //   }
  //   this.http.post<any>('http://localhost:3100', formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }
  createNewPost(){
    
      this.postService.createPost(this.postItem) 
      .subscribe(
        res=>{console.log(res)
        console.log(this.postItem)
        console.log("called");
        alert("success");
        this._route.navigate(["/"]);
        }
        
      )   
  } 
   
}
