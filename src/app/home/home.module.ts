import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeGenreComponent } from './home-genre/home-genre.component';
import { HomeAuthorComponent } from './home-author/home-author.component';
import { HomeTitleComponent } from './home-title/home-title.component';

@NgModule({
  declarations: [HomeMainComponent, HomeGenreComponent, HomeAuthorComponent, HomeTitleComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
