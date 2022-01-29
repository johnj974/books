import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: ['./genre-search.component.css'],
})
export class GenreSearchComponent implements OnInit {
  //.
  categorySearchArray = [];
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
      this.booksService.getByCategory(category).subscribe((data) => {
        console.log(data);
        this.categorySearchArray = data;
        this.searchCategoryForm.reset();
        console.log(category);
      });
    }
  }
}
