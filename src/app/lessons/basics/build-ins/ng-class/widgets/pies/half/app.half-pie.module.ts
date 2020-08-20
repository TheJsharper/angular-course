import { CommonModule } from '@angular/common';
import { AppHalfPieComponent } from './app.half-pie.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[AppHalfPieComponent],
    imports:[CommonModule],
    exports:[AppHalfPieComponent]
})
export class AppHalfPieModule{}