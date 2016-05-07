import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `<h1>Hello {{name}}!</h1>`
})
/**
 * AppComponent
 */
class AppComponent {
    
    name: string;
    
    constructor() {
        this.name = 'Angular 2';
    }
}