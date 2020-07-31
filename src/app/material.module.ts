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
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';


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
    MatCardModule,
    MatRippleModule,
    MatChipsModule,
    MatGridListModule
  ],
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
    MatCardModule,
    MatRippleModule,
    MatChipsModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
