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
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data.id);
    });
  }
}
