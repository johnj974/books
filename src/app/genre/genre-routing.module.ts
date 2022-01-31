import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenreBookComponent } from './genre-book/genre-book.component';
import { GenreMainComponent } from './genre-main/genre-main.component';

const routes: Routes = [
  { path: '', component: GenreMainComponent },
  { path: ':title/:id', component: GenreBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenreRoutingModule {}
