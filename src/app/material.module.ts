import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [],
  exports: [MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule, 
    MatSidenavModule, 
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule],
  imports: [
  
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule, 
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule
  ]
})
export class MaterialModule { }
