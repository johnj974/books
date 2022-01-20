import { Component, OnInit } from '@angular/core';

import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css'],
})
export class AuthorSearchComponent implements OnInit {
  //.
  getAuthor() {
    this.booksService.getByAuthor('tolkien').subscribe((data) => {
      console.log(data);
    });
  }
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {}
}
