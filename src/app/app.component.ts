import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'husky';

  AVc = 'a';

  @Input() count = 0;

  ngOnInit() {
    let abc = 0;
    // console.log({ abc });
  }

  public run() {
    // debugger;
  }
}
