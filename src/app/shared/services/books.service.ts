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

  getBySearch(searchKey: string, searchValue: string) {
    return this.http
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchKey}:${searchValue}&key=${this.keysService.getKey()}&maxResults=10`
      )
      .pipe(
        map((responseData) => {
          let searchArray;
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              if (key === 'items') {
                searchArray = responseData[key];
              }
            }
          }
          console.log(searchArray);
          return searchArray;
        })
      );
  }
}
