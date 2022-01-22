import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreMainComponent } from './genre-main/genre-main.component';
import { GenreSearchComponent } from './genre-search/genre-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenreMainComponent, GenreSearchComponent],
  imports: [CommonModule, GenreRoutingModule, ReactiveFormsModule],
})
export class GenreModule {}
