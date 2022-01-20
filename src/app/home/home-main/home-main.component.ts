import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/shared/services/quotes.service';
import { Quotes } from 'src/app/shared/interfaces/quotes';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css'],
})
export class HomeMainComponent implements OnInit {
  //.
  receivedQuotes: Quotes[] = [];
  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.receivedQuotes = this.quotesService.getStoredQuotes();
  }
}
