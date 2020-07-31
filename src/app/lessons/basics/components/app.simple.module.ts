import { CommonModule } from '@angular/common';
import { AppSimpleComponent } from './app.simple.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[AppSimpleComponent],
    imports:[CommonModule],
    exports:[AppSimpleComponent]


})
export class AppSimpleModule{}