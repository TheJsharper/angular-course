import { AppNgForChildrenModule } from './children/app.ng-for-children.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AppNgForComponent } from './app.ng-for.component';

@NgModule({
    declarations:[AppNgForComponent],
    imports:[CommonModule, AppNgForChildrenModule],
    exports:[AppNgForComponent]
})
export class AppNgForModule{}