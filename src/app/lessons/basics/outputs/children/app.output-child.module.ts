import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AppOutputChildComponent } from "./app.output-child.component";

@NgModule({
    declarations:[AppOutputChildComponent],
    imports:[CommonModule],
    exports:[AppOutputChildComponent]

})
export class AppOutputChildModule{}