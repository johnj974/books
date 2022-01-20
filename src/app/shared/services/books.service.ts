import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeysService } from './keys.service';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  //.

  constructor(private http: HttpClient, private keysService: KeysService) {}

  getByAuthor(author) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${this.keysService.getKey()}&maxResults=10`
    );
  }

  getByTitle(title) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${this.keysService.getKey()}&maxResults=10`
    );
  }

  getByCategory(category) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=${this.keysService.getKey()}&maxResults=10`
    );
  }
}
