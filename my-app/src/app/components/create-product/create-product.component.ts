import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/products/products';
import { ModalService } from 'src/app/services/modal.service';
import { ProductServices } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor (
    private productsService: ProductServices,
    private modalService: ModalService
    ) {}

  form = new FormGroup({
    title: new FormControl<string>(
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    )
  })

  get title () {
    return this.form.controls.title as FormControl
  }

  submit () {
    this.productsService.create({
        title: this.form.value.title as string,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 41,
          count: 2
      }
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
