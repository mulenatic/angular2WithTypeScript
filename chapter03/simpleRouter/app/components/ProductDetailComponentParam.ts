import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'product',
    template: `<h1 class="product">Product Detail for Product: {{productId}}</h1>`,
    styles: ['.product {background: cyan}']
})
export class ProductDetailComponentParam{
    
    productID: string;
    
    constructor(params: RouteParams) {
        this.productID = params.get('id');
    }
}