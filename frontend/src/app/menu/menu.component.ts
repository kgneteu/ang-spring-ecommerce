import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Category} from "../common/category";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    categories: Category[];

    constructor(public categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.categoryService.getCategoryList().subscribe(categories => {
            this.categories = categories;
        })
    }

}
