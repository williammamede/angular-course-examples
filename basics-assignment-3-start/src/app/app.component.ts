import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleParagraph = false;
  buttonClicks = [];

  hideOrShowParagraph(event: any) {
    this.visibleParagraph = !this.visibleParagraph;
    this.buttonClicks.push(event.timeStamp);
  }

  getColor(element: any) {
    return this.buttonClicks.indexOf(element) >= 4 ? 'blue' : '';
  }
}
