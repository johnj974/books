import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleMainComponent } from './title-main/title-main.component';
import { TitleSearchComponent } from './title-search/title-search.component';


@NgModule({
  declarations: [
    TitleMainComponent,
    TitleSearchComponent
  ],
  imports: [
    CommonModule,
    TitleRoutingModule
  ]
})
export class TitleModule { }
