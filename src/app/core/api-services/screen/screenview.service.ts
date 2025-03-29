import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenviewService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  screenWidth$ = this.screenWidth.asObservable();

  constructor() {
    this.updateScreenWidth();
    window.addEventListener('resize', () => this.updateScreenWidth());
  }

  private updateScreenWidth() {
    this.screenWidth.next(window.innerWidth);
  }

  getCurrentScreenWidth(): number {
    return this.screenWidth.getValue();
  }
}
