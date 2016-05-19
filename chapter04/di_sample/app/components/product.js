"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var product_service_1 = require("../services/product-service");
var ProductComponent = (function () {
    function ProductComponent(productService) {
        this.product = productService.getProduct();
    }
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'di-product-page',
            template: "<div>\n    <h1>Product Details</h1>\n    <h2>Title: {{product.title}}</h2>\n    <h2>Description: {{product.description}}</h2>\n    <h2>Price: {{product.price}}</h2>\n</div>",
            providers: [product_service_1.ProductService]
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.__esModule = true;
exports["default"] = ProductComponent;
//# sourceMappingURL=product.js.map