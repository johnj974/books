import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.css'],
})
export class HomeTitleComponent implements OnInit {
  //.
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toTitle() {
    this.router.navigate(['./title']);
  }
}
