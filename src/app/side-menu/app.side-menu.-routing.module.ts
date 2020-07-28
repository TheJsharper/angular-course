import { AppSideMenuComponent } from './app.side-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes =
    [
        { path: '', component: AppSideMenuComponent }
    ]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppSideMenuRoutingModule { }