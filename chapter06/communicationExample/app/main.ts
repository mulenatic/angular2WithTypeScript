import {bootstrap} from 'angular2/platform/browser';
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'order-processor',
    template: `Buying {{quantity}} shares of {{stockSymbol}}`,
    styles: [`:host {background: cyan;}`]
})
class OrderComponent{
    
    @Input('stock-symbol') stockSymbol: string;
    @Input() quantity: number;
        
}

@Component({
    selector: "app",
    template: `<input type="text" placeholder="Enter stock (e.g. IBM)" (change)="onInputEvent($event)">
    <br/>
    <order-processor [stock-symbol]="stock" quantity="100"></order-processor>`,
    directives: [OrderComponent]
})
class AppComponent{
    
    stock: string;
    
    onInputEvent({target}): void {
        this.stock = target.value;
    }    
}

bootstrap(AppComponent);