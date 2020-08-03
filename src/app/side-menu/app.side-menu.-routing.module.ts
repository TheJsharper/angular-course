import { AppOutputComponent } from './../lessons/basics/outputs/app.output.component';
import { AppInputsComponent } from './../lessons/basics/inputs/app.inputs.component';
import { AppSimpleComponent } from './../lessons';
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
                { path: "component", component: AppSimpleComponent },
                { path: "inputs", component: AppInputsComponent },
                {path:'outputs', component:AppOutputComponent}
              // { path: "inputs", loadChildren : ()=> import('../lessons/basics/inputs/app.inputs.module').then(m => m.AppInputsModule) }

            ]
        }
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppSideMenuRoutingModule { }