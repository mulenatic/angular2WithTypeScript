import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {PriceQuoterComponent} from './price_quoter.ts';
import {OrderComponent} from './order.ts';
import {Stock} from "./stock.ts";

@Component({
    selector: 'app',
    template: `<price-quoter (buy)="priceQuoteHandler($event)"></price-quoter>
<br/>
<order-processor [stock]="stock"></order-processor>`,
    directives: [OrderComponent, PriceQuoterComponent]
})
class MediatorComponent {

    stock: Stock;

    priceQuoteHandler(event: Stock) {
        this.stock = event;
    }

}

bootstrap(MediatorComponent);


