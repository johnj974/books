import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDisplayComponent } from './book-display/book-display.component';
import { SplitLastPipe } from './pipes/reduceText.pipe';

@NgModule({
  declarations: [BookDisplayComponent, SplitLastPipe],
  imports: [CommonModule],
  exports: [SplitLastPipe],
})
export class SharedModule {}
