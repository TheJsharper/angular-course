import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AppCoursesListComponent } from "./app.courses-list.component";
import { CourseCardModule } from '../course-card/course-card.module';

@NgModule({
    declarations: [AppCoursesListComponent],
    imports: [CommonModule, CourseCardModule],
    exports: [AppCoursesListComponent]
})
export class AppCoursesListModule { }