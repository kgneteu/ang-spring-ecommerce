import { Injectable } from '@angular/core';
import {Category} from "../common/category";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


interface CategoryResponse {
  _embedded:{
    productCategory: Category[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/api/product-category?size=100'

  constructor(private httpClient: HttpClient) {
  }

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<CategoryResponse>(this.baseUrl).pipe(map(v => v._embedded.productCategory));
  }
}
