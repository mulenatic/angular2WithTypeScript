import {Component, Pipe, PipeTransform} from 'angular2/core';
import {Control, NgFormControl} from 'angular2/common';
import {Product, ProductService} from '../../services/product-service';
import CarouselComponent from '../carousel/carousel';
import {FilterPipe} from '../../pipes/filter-pipe';
import ProductItemComponent from '../product-item/product-item';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'auction-home-page',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['app/components/home/home.css'],
    directives: [
        NgFormControl,
        CarouselComponent, ProductItemComponent
    ],
    pipes: [FilterPipe]
})
export default class HomeComponent {

    products: Product[] = [];
    titleFilter: Control = new Control();
    filterCriteria: string;

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();

        this.titleFilter.valueChanges.debounceTime(100).subscribe(
            value => this.filterCriteria = value, error => console.error(error)
        );
    }

}


