import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HomeComponent} from './components/HomeComponent';
import {ProductDetailComponentParam} from './components/ProductDetailComponentParam';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
    selector: 'basic-routing',
    template: `<a [routerLink]="['/Home']">Home</a>
                <a [routerLink]="['/ProductDetail', {id: 1234}]">Product Detail</a>
                
                <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',            component: HomeComponent,               as: 'Home'},
    {path: '/product/:id', component: ProductDetailComponentParam, as: 'ProductDetail'}
])
class RootComponent{}

bootstrap(RootComponent, [ROUTER_PROVIDERS,
provide(LocationStrategy, {useClass: HashLocationStrategy})]);

