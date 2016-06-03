import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Component({
    selector: "http-client",
    template: `<h1>All Products</h1>
  <li *ngFor="#product of products | async ">
    {{product.title}} - {{product.price | currency}}
  </li>
<ul>
</ul>`
})
class AppComponent {

    // the Product class is not available for angular in this example, in a real app, this should be better.
    products: Observable<Array<any>>;


    constructor(private http: Http) {

        this.products = http.get("/products").map(res => res.json());

    }


}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
