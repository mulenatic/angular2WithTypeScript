import {Component} from 'angular2/core';
import {RouterLink, RouteParams} from 'angular2/router';
import {Product, ProductService, Review} from '../../services/product-service';
import StarsComponent from '../stars/stars';

@Component({
    selector: 'auction-product-page',
    templateUrl: 'app/components/product-detail/product-detail.html',
    directives: [RouterLink, StarsComponent]
})
export class ProductDetailComponent{
    product: Product;
    reviews: Review[];
    
    constructor(params: RouteParams, productService: ProductService) {
        
        let prodId: number = parseInt(params.get('productId'));
        this.product = productService.getProductById(prodId);
        
        this.reviews = productService.getReviewsForProduct(this.product.id);
    }
}