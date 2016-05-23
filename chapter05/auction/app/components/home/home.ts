import {Component} from 'angular2/core';
import {Product, ProductService} from '../../services/product-service';
import CarouselComponent from '../carousel/carousel';
import ProductItemComponent from '../product-item/product-item';

@Component({
    selector: 'auction-home-page',
    templateUrl: 'app/components/home/home.html'
    styleUrls: ['app/components/home/home.css'],
    directives: [
        CarouselComponent, ProductItemComponent
    ]
})
export default class HomeComponent{
    
    products: Product[] = [];
    
    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
    
}

    
