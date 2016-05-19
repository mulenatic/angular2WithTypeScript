"use strict";
var Product = (function () {
    function Product(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
    return Product;
}());
exports.Product = Product;
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProduct = function () {
        return new Product(0, "iPhone 7", 249.99, "The latest iPhone, 7-inch screen");
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map