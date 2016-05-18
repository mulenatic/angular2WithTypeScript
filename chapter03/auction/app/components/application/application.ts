import {Component} from 'angular2/core';
import {Route, RouteConfig, RouterOutlet} from 'angular2/router';
import HomeComponent from 'app/components/home/home';
import FooterComponent from 'app/components/footer/footer';
import NavbarComponent from 'app/components/navbar/navbar';
import SearchComponent from 'app/components/search/search';
import {ProductDetailComponent} from '../product-detail/product-detail';
import {Product, ProductService} from 'app/services/product-service';

@Component({
    selector: 'auction-application',
    templateUrl: 'app/components/application/application.html',
    directives: [
        RouterOutlet,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
        SearchComponent
    ]
})
@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/products/:prodTitle', component: ProductDetailComponent, as: 'ProductDetail'}    
])
export default class ApplicationComponent {
    
    products: Array<Product> = [];
    
    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}