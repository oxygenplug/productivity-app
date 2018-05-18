import { NgModule } from '@angular/core';
import { TaskCardModule } from "./task-card/task-card.module";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TaskDashboardComponent } from './task-dashboard.component';
import { TaskService } from './task.service';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
    imports: [
        TaskCardModule,
        CommonModule,
        MatIconModule,
        HttpClientModule,
        DlDateTimePickerDateModule
    ],
    exports: [
        TaskDashboardComponent
    ],
    declarations:  [
        TaskDashboardComponent
    ],
    providers: [TaskService],
})
export class TaskDashboardModule { }
