import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  //.

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(
      'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBYgbaJSLfKqfWzgkRJ9nPoJGGTB7vUICk&maxResults=10'
    );
  }
}
// api
// AIzaSyBYgbaJSLfKqfWzgkRJ9nPoJGGTB7vUICk

// search url
// https://www.googleapis.com/books/v1/volumes?q=search+terms

// example url+search parameters+key
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBYgbaJSLfKqfWzgkRJ9nPoJGGTB7vUICk
