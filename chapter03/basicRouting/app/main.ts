import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';


@Component({
    selector: "app",
    template: `<a [routerLink]="['/Home']">Home</a>
               <a [routerLink]="['/ProductDetail', {id: 1234}, 'ProductDescription']">Product Details</a>
               <a [routerLink]="['/Luxury']">Luxury Items</a>
               
               <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/product/:id/...', component: ProductDetailComponent, as: 'ProductDetail', data: {isProd: true}},
    {path: '/luxury',
    loader: () => System.import('app/components/luxury')
        .then(libModule => libModule.LuxuryComponent)
        .catch(err => console.error("Can't load luxury items: ${err}")), 
    as: 'Luxury'}    
])
class AppComponent{}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);