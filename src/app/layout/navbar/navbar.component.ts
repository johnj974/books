import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/shared/services/quotes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //.
  dateObj = new Date();

  constructor() {}

  ngOnInit(): void {}
}
