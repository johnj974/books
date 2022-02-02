import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuotesService } from 'src/app/shared/services/quotes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //.
  navbarColour = 'light';
  style: string;
  dateObj = new Date();

  constructor(private route: ActivatedRoute) {}

  linkStyle(page: string) {
    this.style = `${page}-shadow`;
  }

  ngOnInit(): void {}
}
