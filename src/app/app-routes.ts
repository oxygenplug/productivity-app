import { Routes } from '@angular/router';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: TaskDashboardComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]