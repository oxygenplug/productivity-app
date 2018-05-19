import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DateTimePickerComponent } from './datetime-picker.component';
import {MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
    ],
    exports: [DateTimePickerComponent],
    declarations: [DateTimePickerComponent],
    providers: [],
})
export class DateTimePickerModule { }
