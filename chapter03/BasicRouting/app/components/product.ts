import {Component} from 'angular2/core';
import {RouteParams, RouteData} from 'angular2/router';

@Component({
    selector: 'product', 
    template: '<h1 class="product">Product Details for product: {{productID}}</h1>',
    styles: ['.product {background: cyan}']})
export class ProductDetailComponent {
    
    productID: string;
    
    constructor(params: RouteParams, data: RouteData) {
        this.productID = params.get('id');
        
        console.log(`Is this prod environment: ${data.get('isProd')}`);
    }
    
}