import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css'],
})
export class AuthorSearchComponent implements OnInit {
  //.
  authorSearchArray = [];
  searchAuthorForm: FormGroup;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
        this.authorSearchArray = data;
        this.searchAuthorForm.reset();
        console.log(this.authorSearchArray);
      });
    }
  }

  toAuthorsInfo(author: string, id: string) {
    const authorBook = author.replace(/ /g, '');
    this.router.navigate([authorBook, id], { relativeTo: this.route });
  }
}
