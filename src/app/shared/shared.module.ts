import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SignupComponent } from './signup/signup.component'
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const routes: 
Routes = 
[{path: 'signup', component:SignupComponent}]

@NgModule({
  declarations: [],
  exports:[CommonModule, MaterialModule, FormsModule, RouterModule],
  imports: [
    CommonModule,
    MaterialModule, 
    FormsModule, 
    RouterModule
  ]
})
export class SharedModule { }
