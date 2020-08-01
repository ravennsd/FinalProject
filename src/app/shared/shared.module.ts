import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
