import { AppTreeModule } from './../tree/app.tree.module';
import { NgModule } from '@angular/core';
import { AppCoursesListModule } from './../courses-list/app.courses-list.module';
import { AppTreeContainerComponent } from './app.treeContainer.component';
import { AppTreeContainerRoutingModule } from './app.treeContainer.routing.module';
@NgModule({
    declarations: [AppTreeContainerComponent],
    imports: [AppTreeContainerRoutingModule,  AppCoursesListModule, AppTreeModule],
    exports: [AppTreeContainerComponent]
})
export class AppTreeContainerModule { }