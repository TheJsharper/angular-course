import { AppNgIfChildrenModule } from './children/app.ng-if.children.module';
import { CommonModule } from '@angular/common';
import { AppNgIfComponent } from './app.ng-if.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[AppNgIfComponent],
    exports:[AppNgIfComponent],
    imports:[CommonModule, AppNgIfChildrenModule]
})
export class AppNgIfModule{}