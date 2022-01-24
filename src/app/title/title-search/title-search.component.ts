import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/shared/services/books.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css'],
})
export class TitleSearchComponent implements OnInit {
  //.

  searchTitleForm: FormGroup;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.searchTitleForm = new FormGroup({
      title: new FormControl(null, Validators.required),
    });
  }

  getTitle(title: string) {
    if (title === null) {
      return;
    } else {
      this.booksService
        .getByTitle(title)
        .pipe(
          map((responseData) => {
            let itemsArray;
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                if (key === 'items') {
                  itemsArray = responseData[key];
                }
              }
            }
            return itemsArray;
          })
        )
        .subscribe((data) => {
          console.log(data);
          console.log(this.searchTitleForm.value.title);
          this.searchTitleForm.reset();
        });
    }
  }
}
