import { Routes } from '@angular/router';
import { InvestmentComponent } from './component/investment/investment.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'invest', component: InvestmentComponent },
    { path: 'dashboard', component: DashboardComponent }
];
