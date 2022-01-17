import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.css'],
})
export class HomeAuthorComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toAuthor() {
    this.router.navigate(['/author']);
  }
}
