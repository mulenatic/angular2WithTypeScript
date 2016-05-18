import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'seller',
    template: '<p>The seller of this product is Mary Lou (98% positive feedback)',
    styles: [':host {background: yellow}']})
export class SellerInfoComponent{
    
    id: string;
    
    constructor( params: RouteParams ) {
        this.id = params.get('id');
    }
    
}