import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/models/products/products";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: IProduct

    details = false
}