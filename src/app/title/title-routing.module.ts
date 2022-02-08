import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDisplayComponent } from '../shared/book-display/book-display.component';
import { TitleMainComponent } from './title-main/title-main.component';

const routes: Routes = [
  { path: '', component: TitleMainComponent },
  { path: ':book/:id', component: BookDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleRoutingModule {}
