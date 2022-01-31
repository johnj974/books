import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleRoutingModule } from './title-routing.module';
import { TitleMainComponent } from './title-main/title-main.component';
import { TitleSearchComponent } from './title-search/title-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleBookComponent } from './title-book/title-book.component';

@NgModule({
  declarations: [TitleMainComponent, TitleSearchComponent, TitleBookComponent],
  imports: [CommonModule, TitleRoutingModule, ReactiveFormsModule],
})
export class TitleModule {}
