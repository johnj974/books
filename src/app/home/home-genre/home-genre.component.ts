import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-genre',
  templateUrl: './home-genre.component.html',
  styleUrls: ['./home-genre.component.css'],
})
export class HomeGenreComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toCategory() {
    this.router.navigate(['./category']);
  }
}
