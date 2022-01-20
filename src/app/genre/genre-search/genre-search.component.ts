import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.css'],
})
export class GenreSearchComponent implements OnInit {
  //.
  constructor(private booksService: BooksService) {}

  getCategory() {
    this.booksService.getByCategory('science').subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
