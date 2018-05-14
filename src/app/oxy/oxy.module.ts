import { NgModule } from '@angular/core';
import { OxyModalModule } from './modal/oxy-modal.module'

@NgModule({
    imports: [
        OxyModalModule        
    ],
    exports: [
        OxyModalModule
    ],
    declarations: [],
    providers: [],
})
export class OxyModule { }
