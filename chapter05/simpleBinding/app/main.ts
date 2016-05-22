import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
    selector: "stock-search",
    template: `
    <input type='text' placehode="Enter stock symbol" [(ngModel)] = "lastStockSymbol">
    <br>
    The value of lastStockSymbol is {{lastStockSymbol}}
    `
})
class StockComponent{
    
    lastStockSymbol: string;
    
    constructor() {
        setTimeout(() => {
            this.lastStockSymbol="AAPL"
        }, 1000);
    }
            
}

@Component({
    selector: 'app',
    directives: [StockComponent],
    template:`<stock-search></stock-search>`
})
class AppComponent {}

bootstrap(AppComponent);