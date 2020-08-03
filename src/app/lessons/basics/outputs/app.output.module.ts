import { AppOutputChildModule } from './children/app.output-child.module';
import { CommonModule } from '@angular/common';
import { AppOutputComponent } from './app.output.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[AppOutputComponent],
    imports:[CommonModule, AppOutputChildModule],
    exports:[AppOutputComponent]
})
export class AppOutputModule{}