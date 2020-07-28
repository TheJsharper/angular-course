import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppTreeContainerComponent } from './app.treeContainer.component';


const routes: Routes = [
    { path: '', component: AppTreeContainerComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppTreeContainerRoutingModule { }