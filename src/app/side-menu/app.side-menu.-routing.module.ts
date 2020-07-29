import { AppPersonCardComponent } from './../lessons';
import { AppCoursesListComponent } from './../courses-list/app.courses-list.component';
import { AppSideMenuComponent } from './app.side-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes =
    [
        {
            path: '', component: AppSideMenuComponent,
            children: [
                //{path:'pipe',  loadChildren:()=> import('../courses-list/app.courses-list.module').then(m => m.AppCoursesListModule)}
                { path: 'pipe', component: AppCoursesListComponent },
                { path: "component", component: AppPersonCardComponent }

            ]
        }
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppSideMenuRoutingModule { }