import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductServices } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  constructor(
    public productsService: ProductServices,
    public modalService: ModalService
    ) {}
  title = 'angular app';
  limit = 5;
  loading = false;
  filter = '';
  // products: IProduct[] = [];
  // products$: Observable<IProduct[]>;


  ngOnInit(): void {    
    this.loading = true;
    this.limit = Math.floor(Math.random() * 10);

    // this.products$ = this.productsService.getAllProduct(this.limit).pipe(tap(() => this.loading = false))

    this.productsService.getAllProduct(this.limit).subscribe(() => {
      this.loading = false;
    })
  }
}
