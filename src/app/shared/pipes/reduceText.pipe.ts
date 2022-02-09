import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'splitLast' })
export class SplitLastPipe implements PipeTransform {
  transform(value: string, [separator]): string {
    let splits = value.split(separator);
    if (splits.length > 1) {
      return splits.shift();
    } else {
      return value;
    }
  }
}
