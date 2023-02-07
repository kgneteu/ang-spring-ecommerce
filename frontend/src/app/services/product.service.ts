import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";


interface ProductResponse {
    _embedded: {
        products: Product[]
    }
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl = 'http://localhost:8080/api/products'

    constructor(private httpClient: HttpClient) {
    }

    getProductList(categoryId: string | null): Observable<Product[]> {
        const url = categoryId ? this.baseUrl + '/search/findByCategoryId?id=' + categoryId : this.baseUrl;
        return this.httpClient.get<ProductResponse>(url).pipe(map(v => v._embedded.products));
    }
}
