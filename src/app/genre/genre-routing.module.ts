import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDisplayComponent } from '../shared/book-display/book-display.component';

import { GenreMainComponent } from './genre-main/genre-main.component';

const routes: Routes = [
  { path: '', component: GenreMainComponent },
  { path: ':title/:id', component: BookDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreRoutingModule {}
