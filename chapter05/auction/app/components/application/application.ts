import {Component} from 'angular2/core';
import {Route, RouteConfig, RouterOutlet} from 'angular2/router';
import HomeComponent from '../home/home';
import FooterComponent from '../footer/footer';
import NavbarComponent from '../navbar/navbar';
import SearchComponent from '../search/search';
import {ProductDetailComponent} from '../product-detail/product-detail';

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
    {path: '/products/:productId', component: ProductDetailComponent, as: 'ProductDetail'}    
])
export default class ApplicationComponent {}