import {Component, OnInit} from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    products: Product[];
    categoryId: number;

    constructor(private productService: ProductService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(()=>{
            const categoryId = this.route.snapshot.paramMap.has('id')? this.route.snapshot.paramMap.get('id'): null;
            this.productService.getProductList(categoryId).subscribe(data => {
                this.products = data
            })
        })

    }

}
