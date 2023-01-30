import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";
import {data} from "autoprefixer";
import {log} from "util";

interface ProductResponse {
    _embedded:{
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

    getProductList(): Observable<Product[]> {
        return this.httpClient.get<ProductResponse>(this.baseUrl).pipe(map(v => v._embedded.products));
    }
}
