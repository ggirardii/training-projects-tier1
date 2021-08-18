import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  red: string = '';
  blue: string = '';
  green: string = '';
  redIncrementValue: number = 0;
  blueIncrementValue: number = 0;
  greenIncrementValue: number = 0;

  isRunning: boolean = false;

  changeAnimationState(): void {
    this.isRunning = !this.isRunning;
  }
}
