import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {ProductDescriptionComponent} from './product_description'
import {SellerInfoComponent} from './seller';

@Component({
    selector: 'product', 
    template: `<div class="product">
                 <h1>Product Detail for product: {{productID}}</h1>
                 
                 <router-outlet></router-outlet>
                 
                 <a [routerLink]="['./SellerInfo', {id: 123}]">Seller Info</a>
               </div>`,
    styles: ['.product {background: cyan}'],
    directives: ROUTER_DIRECTIVES})
@RouteConfig([
    {path: '/', component: ProductDescriptionComponent, as 'ProductDescription'},
    {path: '/seller', component: SellerInfoComponent, as: 'SellerInfo'}])
export class ProductDetailComponent {
    
    productID: string;
    
    constructor(params: RouteParams) {
        this.productID = params.get('id');
    }
    
}