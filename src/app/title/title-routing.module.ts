import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleMainComponent } from './title-main/title-main.component';

const routes: Routes = [{ path: '', component: TitleMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleRoutingModule {}
