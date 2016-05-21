import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: "app",
    template: `<h3>Property vs attribute binding:</h3>
    <input  [value] = "greeting"
            [attr.value] = "greeting"
            (input)="onInputEvent($event)">
    `
})
class AppComponent{
    
    greeting: string = 'A value';
    
    onInputEvent(event: Event): void {
        
        let inputElement = event.target;
        
        console.log(`The input property value = ${inputElement.value}`);
        console.log(`The input attribute value = ${inputElement.getAttribute('value')}`);
        console.log(`The greeting property value = ${this.greeting}`);
        
    }
        
}

bootstrap(AppComponent);