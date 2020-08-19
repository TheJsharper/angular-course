import { CommonModule } from '@angular/common';
import { AppWholePieComponent } from './app.whole-pie.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[AppWholePieComponent],
    imports:[CommonModule],
    exports:[AppWholePieComponent]
})
export class AppWholePieModule{}