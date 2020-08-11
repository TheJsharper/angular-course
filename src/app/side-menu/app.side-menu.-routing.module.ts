import { AppNgForComponent } from './../lessons/basics/build-ins/ng-for/app.ng-for.component';
import { AppOutputComponent } from './../lessons/basics/outputs/app.output.component';
import { AppInputsComponent } from './../lessons/basics/inputs/app.inputs.component';
import { AppSimpleComponent } from './../lessons';
import { AppCoursesListComponent } from './../courses-list/app.courses-list.component';
import { AppSideMenuComponent } from './app.side-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AppNgIfComponent } from '../lessons/basics/build-ins/ng-if/app.ng-if.component';

const routes: Routes =
    [
        {
            path: '', component: AppSideMenuComponent,
            children: [
                //{path:'pipe',  loadChildren:()=> import('../courses-list/app.courses-list.module').then(m => m.AppCoursesListModule)}
                { path: 'pipe', component: AppCoursesListComponent },
                { path: "component", component: AppSimpleComponent },
                { path: "inputs", component: AppInputsComponent },
                {path:'outputs', component:AppOutputComponent},
                {path:'ng-for', component:AppNgForComponent},
                {path:'ng-if', component:AppNgIfComponent}
              // { path: "inputs", loadChildren : ()=> import('../lessons/basics/inputs/app.inputs.module').then(m => m.AppInputsModule) }

            ]
        }
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppSideMenuRoutingModule { }