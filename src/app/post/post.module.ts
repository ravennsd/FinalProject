import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from "@angular/router";

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list.component';
import { WritePostComponent } from './write-post/write-post.component';
import { DashComponent } from './dash/dash.component';

import { PostService } from '../post.service';

const routes: 
Routes = 
[{path: 'ventures', component:PostListComponent},
{path: '', component: PostListComponent},
{path:'dash', component: DashComponent},
{path: ':id', component: PostDetailComponent},
{path: 'ventures/:id', component: PostDetailComponent},
{path: 'create', component: WritePostComponent}]


@NgModule({
  declarations: [ PostListComponent,PostDetailComponent, WritePostComponent, DashComponent],
  providers:[PostService],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule { public _route: RouterModule; public routes: Routes; public postService: PostService }
