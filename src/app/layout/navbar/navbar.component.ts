import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { QuotesService } from 'src/app/shared/services/quotes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  //.
  navbarColour = 'light';
  style: string;
  dateObj = new Date();
  receivedNavLink: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) {}

  linkStyle(page: string) {
    this.style = `${page}-shadow`;
  }

  ngOnInit(): void {
    this.receivedNavLink = this.navbarService.navLinkOut.subscribe(
      (emittedLink) => {
        console.log(emittedLink);
        this.style = `${emittedLink}-shadow`;
      }
    );
  }

  ngOnDestroy(): void {
    this.receivedNavLink.unsubscribe();
  }
}
