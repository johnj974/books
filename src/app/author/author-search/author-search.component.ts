import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css'],
})
export class AuthorSearchComponent implements OnInit {
  //.

  searchAuthorForm: FormGroup;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.searchAuthorForm = new FormGroup({
      author: new FormControl(null, Validators.required),
    });
  }

  getAuthor(author: string) {
    if (author === null) {
      return;
    } else {
      this.booksService.getByAuthor(author).subscribe((data) => {
        console.log(data);
        this.searchAuthorForm.reset();
        console.log(author);
      });
    }
  }
}
