import { NgModule } from '@angular/core';
import { TaskCardModule } from "./task-card/task-card.module";
import { CommonModule } from '@angular/common';

import { TaskDashboardComponent } from './task-dashboard.component';

@NgModule({
    imports: [
        TaskCardModule,
        CommonModule
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
