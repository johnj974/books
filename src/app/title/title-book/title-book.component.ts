import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-title-book',
  templateUrl: './title-book.component.html',
  styleUrls: ['./title-book.component.css'],
})
export class TitleBookComponent implements OnInit {
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
