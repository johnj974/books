import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeGenreComponent } from './home-genre/home-genre.component';
import { HomeAuthorComponent } from './home-author/home-author.component';

@NgModule({
  declarations: [HomeMainComponent, HomeGenreComponent, HomeAuthorComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
