import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post/PostModel.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _registerUrl = "http://localhost:3100/signup";
  private _loginUrl = "http://localhost:3100/login";

  posts : PostModel[];
  
  constructor(public http: HttpClient) { }
  getPosts() {
    return this.http.get("http://localhost:3100/posts");
  }
  getPostData(id: string){
    return this.http.get(`http://localhost:3100/posts/${id}`)
  }

  dashPosts() {
    return this.http.get("http://localhost:3100/dash")
  }

  createPost(data){
      return this.http.post("http://localhost:3100/create", {"post":data})
  }

  deletePost(id: string){
    return this.http.post("http://localhost:3100/delete",{"id":id})
  }
  deleteP(id: string){
    return this.http.post(`http://localhost:3100/delete/${id}`,{"id":id})
  }
  editPost(id, post){
    return this.http.put(`http://localhost:3100/update/${id}`,post);
  }
  // editP(post){
  //   return this.http.put(`http://localhost:3100/update`,post);
  // }
  uploadImageData(image: File){
    return this.http.post("http://localhost:3100/create", {"image":image})
  }
}
