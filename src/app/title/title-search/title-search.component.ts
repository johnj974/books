import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css'],
})
export class TitleSearchComponent implements OnInit {
  //.

  searchTitleForm: FormGroup;
  titleArray = [];

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchTitleForm = new FormGroup({
      title: new FormControl(null, Validators.required),
    });
  }

  getTitle(title: string) {
    const key = 'intitle';
    if (title === null) {
      return;
    } else {
      this.booksService.getBySearch(key, title).subscribe((data) => {
        for (const item of data) {
          this.titleArray.push(item);
        }
        console.log(this.searchTitleForm.value.title);
        this.searchTitleForm.reset();
      });
    }
  }

  toBookInfo(book: string, id: number) {
    const bookId = id;
    const bookTitle = book.replace(/ /g, '');
    this.router.navigate([bookTitle, bookId], { relativeTo: this.route });
  }
}

// getBySearch(searchKey,searchValue)
