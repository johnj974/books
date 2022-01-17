import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleMainComponent } from './title-main/title-main.component';


@NgModule({
  declarations: [
    TitleMainComponent
  ],
  imports: [
    CommonModule,
    TitleRoutingModule
  ]
})
export class TitleModule { }
