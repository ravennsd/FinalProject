import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from "./auth.guard";

import { HomeComponent } from './shared/home/home.component';
import { SignupComponent } from './shared/signup/signup.component';
import { LoginComponent } from './shared/login/login.component';
import { WritePostComponent } from './post/write-post/write-post.component';
import { DashComponent } from './post/dash/dash.component';

const routes: Routes = [ 
{ path: 'signup', component: SignupComponent},
{ path : 'login', component: LoginComponent },
{ path: 'dash', component: DashComponent},
{ path: 'create',  component: WritePostComponent, 
canActivate: [AuthGuard]
},
{path: '', redirectTo: '/', pathMatch: 'full'},
{path: '', loadChildren: './post/post.module#PostModule'}]
// canActivate: [AuthGuard},
//   {path:'secretkey',
// loadChildren, './'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
