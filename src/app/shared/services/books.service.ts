import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeysService } from './keys.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  //.

  constructor(private http: HttpClient, private keysService: KeysService) {}

  getByAuthor(author) {
    return this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${this.keysService.getKey()}&maxResults=10`
      )
      .pipe(
        map((responseData) => {
          let authorArray;
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              if (key === 'items') {
                authorArray = responseData[key];
              }
            }
          }
          return authorArray;
        })
      );
  }

  getByTitle(title) {
    return this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${this.keysService.getKey()}&maxResults=10`
      )
      .pipe(
        map((responseData) => {
          let itemsArray;
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              if (key === 'items') {
                itemsArray = responseData[key];
              }
            }
          }
          return itemsArray;
        })
      );
  }

  getByCategory(category) {
    return this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&key=${this.keysService.getKey()}&maxResults=10`
      )
      .pipe(
        map((responseData) => {
          let categoryArray;
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              if (key === 'items') {
                categoryArray = responseData[key];
              }
            }
          }
          return categoryArray;
        })
      );
  }
}
