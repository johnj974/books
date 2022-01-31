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
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data);
    });
  }
}
