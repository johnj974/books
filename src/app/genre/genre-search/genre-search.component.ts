import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  noImage = '../../../assets/images/no-image-available.png';
  noData = 'No Data';
  categoryOptions = ["History", "Fiction"]

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchCategoryForm = new FormGroup({
      category: new FormControl(null, Validators.required),
    });
  }

  getCategory(category: string) {
    const key = 'subject';
    if (category === null) {
      return;
    } else {
      this.booksService.getBySearch(key, category).subscribe((data) => {
        this.categorySearchArray = data;
        this.searchCategoryForm.reset();
      });
    }
  }

  toGenreInfo(genre: string, id: number) {
    const genreId = id;
    const bookgenre = genre.replace(/ /g, '');
    this.router.navigate([bookgenre, genreId], { relativeTo: this.route });
  }
}
