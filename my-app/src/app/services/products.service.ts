import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { IProduct } from '../models/products/products';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class ProductServices {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
        ) {}

    products: IProduct[] = []

    private errorHandler (error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }

    getAllProduct (limit: number): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromObject: {
                    limit: limit
                }
            })
        }).pipe(
            tap(prod => this.products = prod),
            //to send request few times if we need it
            // retry(2),
            catchError(this.errorHandler.bind(this))
        )
    }

    create (product: IProduct): Observable<IProduct> {
        return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(
            tap(prod => this.products.push(prod))
        )
    }
}