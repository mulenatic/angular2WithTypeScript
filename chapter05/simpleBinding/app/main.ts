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
    
    onInputEvent({target}): void {
        
        console.log(`The input property value = ${target.value}`);
        console.log(`The input attribute value = ${target.getAttribute('value')}`);
        console.log(`The greeting property value = ${this.greeting}`);
        
    }
        
}

bootstrap(AppComponent);