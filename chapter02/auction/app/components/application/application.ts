import {Component} from 'angular2/core';
import CarouselComponent from 'app/components/carousel/carousel';
import FooterComponent from 'app/components/footer/footer';
import NavbarComponent from 'app/components/navbar/navbar';
import ProductItemComponent from '../product-item/product-item';
import SearchComponent from 'app/components/search/search';
import {Product, ProductService} from 'app/services/product-service';

@Component({
    selector: 'auction-application',
    providers: [
        ProductService
    ],
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css'],
    directives: [
        CarouselComponent,
        FooterComponent,
        NavbarComponent,
        ProductItemComponent,
        SearchComponent
    ]
})
export default class ApplicationComponent {
    
    products: Array<Product> = [];
    
    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}