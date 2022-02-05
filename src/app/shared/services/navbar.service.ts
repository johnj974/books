import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  //

  navLinkOut = new Subject<string>();

  constructor() {}
}
