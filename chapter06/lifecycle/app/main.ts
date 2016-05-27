import {bootstrap} from 'angular2/platform/browser';
import {Component, Input, OnChanges, SimpleChange} from 'angular2/core';

@Component({
    selector: 'child',
    styles: ['.child {background: lightgreen;}'],
    template: `
<div class="child">
  <h2>Child</h2>
  <div>Greeting: {{greeting}}</div>
  <div>User name: {{user.name}}</div>
  <div>Number: {{number}}</div>
  <div>Message: <input [(ngModel)]="message"></div>
</div>`})
class ChildComponent implements OnChanges {

    @Input() greeting: string;
    @Input() user: { name: string };
    @Input() number: number;

    message: string = 'Initial message';

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        console.log(JSON.stringify(changes, null, 2));
    }
}


@Component({
    selector: "app",
    directives: [ChildComponent],
    styles: ['.parent {background: lightblue;}'],
    template: `
<div class="parent">
  <h2>Parent</h2>
  <div>Greeting: <input type="text" [value]="greeting" (change)="greeting = $event.target.value"></div>
  <div>User name: <input type="text" [value]="user.name" (change)="user.name = $event.target.value"></div>
  <div>Number: <input type="number" [value]="number" (change)="number = $event.target.value"></div>
  <child [greeting]="greeting" [user]="user" [number]="number"></child>
</div>`
})
class AppComponent {

    greeting: string = 'Hello';
    user: { name: string } = { name: 'John' };
    number: number = 5;

}

bootstrap(AppComponent);
