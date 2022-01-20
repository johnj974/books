import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css'],
})
export class TitleSearchComponent implements OnInit {
  //.
  constructor(private booksService: BooksService) {}

  getTitle() {
    this.booksService.getByTitle('lord of the rings').subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
