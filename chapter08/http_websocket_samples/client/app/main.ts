import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {ProductService} from "./product-service";

@Component({
    selector: "http-client",
    providers: [ProductService],
    template: `<h1>Find Product by ID</h1>
<form #f="ngForm" (ngSubmit)="getProductByID(f.value)">
  <label for="productID">Enter Product ID</label>
  <input id="productID" type="number" ngControl="productID">
  <button type="submit">Find product</button>
</form>
<h4>{{productTitle}} {{productPrice}}</h4>
`
})
class AppComponent {

    productTitle: string;
    productPrice: string;

    constructor(private productService: ProductService) { }

    getProductByID(formValue) {
        this.productService.getProductByID(formValue.productID)
            .subscribe(
            data => {
                this.productTitle = data.title;
                this.productPrice = `$` + data.price;
            },
            err => console.log("Can't get product details. Error code: %s, URL: %s", err.status, err.url),
            () => console.log("Done")
            );
    }


}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
