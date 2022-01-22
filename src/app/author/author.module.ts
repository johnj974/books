import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorMainComponent } from './author-main/author-main.component';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthorMainComponent, AuthorSearchComponent],
  imports: [CommonModule, AuthorRoutingModule, ReactiveFormsModule],
})
export class AuthorModule {}
