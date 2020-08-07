import { CommonModule } from '@angular/common';
import { AppOutputDisplayComponent } from './app.output-display.component';
import { NgModule, Input } from "@angular/core";

@NgModule({
    declarations: [AppOutputDisplayComponent],
    imports: [CommonModule],
    exports: [AppOutputDisplayComponent]
})
export class AppOutputDisplayModule {
   

}