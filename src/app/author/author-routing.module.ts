import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorBookComponent } from './author-book/author-book.component';
import { AuthorMainComponent } from './author-main/author-main.component';

const routes: Routes = [
  { path: '', component: AuthorMainComponent },
  { path: ':authorsBook/:id', component: AuthorBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
