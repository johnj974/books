import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.css'],
})
export class GenreSearchComponent implements OnInit {
  //.
  searchCategoryForm: FormGroup;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.searchCategoryForm = new FormGroup({
      category: new FormControl(null, Validators.required),
    });
  }

  getCategory(category: string) {
    if (category === null) {
      return;
    } else {
      this.booksService
        .getByCategory(category)
        .pipe(
          map((responseData) => {
            let categoryArray;
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                if (key === 'items') {
                  categoryArray = responseData[key];
                }
              }
            }
            return categoryArray;
          })
        )
        .subscribe((data) => {
          console.log(data);
          this.searchCategoryForm.reset();
          console.log(category);
        });
    }
  }
}
