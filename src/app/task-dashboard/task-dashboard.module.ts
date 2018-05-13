import { NgModule } from '@angular/core';
import { TaskCardModule } from "./task-card/task-card.module";

import { TaskDashboardComponent } from './task-dashboard.component';

@NgModule({
    imports: [
        TaskCardModule
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
