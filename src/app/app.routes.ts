import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { ProductAddComponent } from './admin/products/product-add/product-add.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'admin/list-products',
        component: ProductListComponent
    },
    {
        path: 'admin/add-product',
        component: ProductAddComponent
    }
];
