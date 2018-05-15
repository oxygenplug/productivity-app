import { NgModule } from '@angular/core';
import { TaskCardModule } from "./task-card/task-card.module";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material'

import { TaskDashboardComponent } from './task-dashboard.component';

@NgModule({
    imports: [
        TaskCardModule,
        CommonModule,
        MatIconModule
    ],
    exports: [
        TaskDashboardComponent
    ],
    declarations:  [
        TaskDashboardComponent
    ],
    providers: [],
})
export class TaskDashboardModule { }
