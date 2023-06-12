import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/products/products';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], filter: string):IProduct[] {
    if(!filter.length) return products
    return products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase() as string));
  }

}
