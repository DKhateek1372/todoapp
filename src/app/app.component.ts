import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-todolist></app-todolist>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
