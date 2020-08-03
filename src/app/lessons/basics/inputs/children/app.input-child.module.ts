import { CommonModule } from '@angular/common';
import { AppInputChildComponent } from './app.input-child.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AppInputChildComponent],
    imports: [CommonModule],
    exports: [AppInputChildComponent]
})
export class AppInputChildModule{}