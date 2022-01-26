import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      this.booksService.getByTitle(title).subscribe((data) => {
        for (const item of data) {
          this.titleArray.push(item);
        }
        console.log(this.titleArray);
        console.log(this.searchTitleForm.value.title);
        this.searchTitleForm.reset();
      });
    }
  }
}
