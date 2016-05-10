import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HomeComponent} from './components/HomeComponent';
import {ProductDetailComponent} from './components/ProductDetailComponent';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'basic-routing',
    template: `<a [routerLink]="['/Home']">Home</a>
                <a [routerLink]="['/ProductDetail']">Product Detail</a>
                
                <router-outlet></router-outlet>`,
                directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/product', component: ProductDetailComponent, as: 'ProductDetail'}
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS,
provide(LocationStrategy, {useClass: HashLocationStrategy})]);

