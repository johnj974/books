import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-genre-book',
  templateUrl: './genre-book.component.html',
  styleUrls: ['./genre-book.component.css'],
})
export class GenreBookComponent implements OnInit {
  //.
  bookID: string;

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
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
