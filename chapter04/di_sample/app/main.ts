import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import  ProductComponent from './components/product';

@Component({
    selector: "app",
    template: `<h1>Basic Dependency Injection Sample</h1>
<di-product-page></di-product-page>`,
    directives: [ProductComponent]

})
class AppComponent{}

bootstrap(AppComponent);