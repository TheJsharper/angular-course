import { AppInputChildModule } from './children/app.input-child.module';
import { CommonModule } from '@angular/common';
import { AppInputsComponent } from './app.inputs.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AppInputsComponent],
    imports: [CommonModule, AppInputChildModule],
    exports: [AppInputsComponent]
})
export class AppInputsModule { }