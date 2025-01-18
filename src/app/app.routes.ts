import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'admin/products',
        component: ProductListComponent
    }
];
