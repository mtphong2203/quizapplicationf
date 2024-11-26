import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { ManagementLayoutComponent } from './layouts/management-layout/management-layout.component';

export const routes: Routes = [
    {
        path: 'manager',
        component: ManagementLayoutComponent
    },
    {
        path: '',
        component: CustomerLayoutComponent,
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    }
];
