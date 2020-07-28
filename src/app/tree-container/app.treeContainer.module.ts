import { CourseCardModule } from './../course-card/course-card.module';
import { AppTreeContainerRoutingModule } from './app.treeContainer.routing.module';

import {NgModule} from '@angular/core';
import { AppTreeContainerComponent } from './app.treeContainer.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[AppTreeContainerComponent],
    imports:[AppTreeContainerRoutingModule, CourseCardModule, CommonModule],
    exports:[AppTreeContainerComponent]
})
export class AppTreeContainerModule{}