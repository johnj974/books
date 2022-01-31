import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleBookComponent } from './title-book/title-book.component';
import { TitleMainComponent } from './title-main/title-main.component';

const routes: Routes = [
  { path: '', component: TitleMainComponent },
  { path: ':book/:id', component: TitleBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleRoutingModule {}
