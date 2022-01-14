import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/shared/services/quotes.service';

import { Quotes } from 'src/app/shared/interfaces/quotes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  //.
  quotesArray: Quotes[] = [];
  retrievedQuote = {
    text: 'Time stays long enough for anyone who will use it.',
    author: 'Leonardo Da Vinci',
  };
  constructor(private quoteService: QuotesService) {}

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((data: Quotes[]) => {
      this.quotesArray = data;
      console.log(this.quotesArray);
      let number = Math.floor(Math.random() * this.quotesArray.length) + 1;
      this.retrievedQuote = this.quotesArray[number];
      console.log(this.retrievedQuote);
    });
  }
}
