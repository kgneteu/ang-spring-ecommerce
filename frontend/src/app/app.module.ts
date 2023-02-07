import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from "@angular/common/http";
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductService} from "./services/product.service";
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {'path': 'category/:id', component: ProductListComponent},
    {'path': 'category', component: ProductListComponent},
    {'path': 'product', component: ProductListComponent},
    {'path': '', redirectTo: '/product', pathMatch: 'full'},
    {'path': '**', redirectTo: '/product', pathMatch: 'full'}
]

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        FooterComponent,
        MenuComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
