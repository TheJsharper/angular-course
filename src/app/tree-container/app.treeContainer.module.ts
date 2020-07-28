import { CourseCardModule } from './../course-card/course-card.module';
import { AppTreeContainerRoutingModule } from './app.treeContainer.routing.module';

import {NgModule} from '@angular/core';
import { AppTreeContainerComponent } from './app.treeContainer.component';
@NgModule({
    declarations:[AppTreeContainerComponent],
    imports:[AppTreeContainerRoutingModule, CourseCardModule],
    exports:[AppTreeContainerComponent]
})
export class AppTreeContainerModule{}