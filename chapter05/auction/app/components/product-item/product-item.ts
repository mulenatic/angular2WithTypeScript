import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import StarsComponent from 'app/components/stars/stars';
import {Product} from 'app/services/product-service';


@Component({
    selector: 'auction-product-item',
    properties: ['product'],
    templateUrl: 'app/components/product-item/product-item.html',
    styleUrls: ['app/components/product-item/product-item.css'],
    directives: [RouterLink, StarsComponent]
})
export default class ProductItemComponent {
   product: Product;
}