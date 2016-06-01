import {Component} from "angular2/core";
import {Control, ControlGroup, Validators, FormBuilder, FORM_PROVIDERS, FORM_DIRECTIVES} from "angular2/common";
import {ProductService} from "../../services/product-service";

@Component({
    selector: "auction-search",
    templateUrl: "app/components/search/search.html",
    directives: [FORM_DIRECTIVES],
    providers: [ProductService, FORM_PROVIDERS]
})
export default class SearchComponent {

    formModel: ControlGroup;
    categories: string[];

    constructor(private productService: ProductService) {
        this.categories = this.productService.getAllCategories();
        const fb = new FormBuilder();
        this.formModel = fb.group({
            title: [null, Validators.minLength(3)],
            price: [null, positiveNumberValidator],
            category: [-1]
        });
    }


    onSearch() {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
        }
    }
}

function positiveNumberValidator(control: Control): any {
    if (!control.value) return null;
    const price = parseInt(control.value);

    return price === null || typeof price === 'number' && price > 0 ? null : { positivenumber: true };

}
