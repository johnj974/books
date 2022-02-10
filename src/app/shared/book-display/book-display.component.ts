import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css'],
})
export class BookDisplayComponent implements OnInit {
  //.
  bookID: string;
  book: {};
  noImage = '../../../assets/images/no-image-available.png';

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {}

  retrieveBook() {
    this.bookService.getByID(this.bookID).subscribe((data) => {
      this.book = data;
      console.log(this.book);
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
