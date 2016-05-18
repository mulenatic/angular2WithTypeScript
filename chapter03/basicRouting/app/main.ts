import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {HomeComponent} from './components/home';
import {ProductDetailComponent} from './components/product';
import {ChatComponent} from './components/chat';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';


@Component({
    selector: "app",
    template: `<div>
                <a [routerLink]="['/Home']">Home</a>
                <a [routerLink]="['/ProductDetail', {id: 1234}, 'ProductDescription']">Product Details</a>
                <a [routerLink]="['./Home', ['Chat']]">Chat</a>
               </div>
               
               <div>               
                <router-outlet></router-outlet>
                <router-outlet name="chat"></router-outlet>
               </div>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/product/:id/...', component: ProductDetailComponent, as: 'ProductDetail', data: {isProd: true}},
    {aux: '/chat', component: ChatComponent, as: 'Chat'}    
])
class AppComponent{}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);