import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AppNgIfChildrenComponent } from "./app.ng-if-children.component";

@NgModule({
    declarations:[AppNgIfChildrenComponent],
    imports:[CommonModule],
    exports:[AppNgIfChildrenComponent]  
})
export class AppNgIfChildrenModule{}