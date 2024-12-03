import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { ManagementLayoutComponent } from './layouts/management-layout/management-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthenticationLayoutComponent,
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'manager',
        component: ManagementLayoutComponent,
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
    },
    {
        path: '',
        component: CustomerLayoutComponent,
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    }
];
