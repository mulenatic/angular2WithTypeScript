import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';


@Component({
    selector: "app",
    template: `<a [routerLink]="['/Home']">Home</a>
               <a [routerLink]="['/ProductDetail']">Product Details</a>
               
               <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'}])
class AppComponent{}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);