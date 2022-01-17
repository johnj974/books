import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quotes } from '../interfaces/quotes';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  //.
  url = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) {}

  getQuotes() {
    return this.http.get<Quotes[]>(this.url);
  }
}
