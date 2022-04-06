import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'husky';

  AVc = 'a';

  @Input() count = 0;

  public run() {
    debugger;
  }
}
