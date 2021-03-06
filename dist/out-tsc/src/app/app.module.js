import * as tslib_1 from "tslib";
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            BsNavbarComponent,
            HomeComponent,
            ProductsComponent,
            ShoppingCartComponent,
            CheckOutComponent,
            OrderSuccessComponent,
            MyOrdersComponent,
            AdminProductsComponent,
            AdminOrdersComponent,
            LoginComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebase, 'BakeShop'),
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            NgbModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'products', component: ProductsComponent },
                { path: 'shopping-cart', component: ShoppingCartComponent },
                { path: 'check-out', component: CheckOutComponent },
                { path: 'my/orders', component: MyOrdersComponent },
                { path: 'order-success', component: OrderSuccessComponent },
                { path: 'admin/products', component: AdminProductsComponent },
                { path: 'admin/orders', component: AdminOrdersComponent },
                { path: 'login', component: LoginComponent }
            ])
        ],
        providers: [
            AuthService,
            AuthGuardService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map