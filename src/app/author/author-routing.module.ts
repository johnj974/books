import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDisplayComponent } from '../shared/book-display/book-display.component';

import { AuthorMainComponent } from './author-main/author-main.component';

const routes: Routes = [
  { path: '', component: AuthorMainComponent },
  { path: ':authorsBook/:id', component: BookDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
