import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-author-book',
  templateUrl: './author-book.component.html',
  styleUrls: ['./author-book.component.css'],
})
export class AuthorBookComponent implements OnInit {
  //.
  bookID: string;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  retrieveBook() {
    this.bookService.getByID(this.bookID).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data.id);
      this.bookID = data.id;
      this.retrieveBook();
    });
  }
}
