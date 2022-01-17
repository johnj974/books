import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quotes } from '../interfaces/quotes';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  //.
  url = 'https://type.fit/api/quotes';
  storedQuotes: Quotes[] = [
    {
      text: 'A reader lives a thousand lives before he dies...The man who never reads lives only one',
      author: 'George RR Martin',
    },
  ];

  constructor(private http: HttpClient) {}

  getQuotes() {
    return this.http.get<Quotes[]>(this.url);
  }

  getStoredQuotes() {
    return this.storedQuotes;
  }
}
