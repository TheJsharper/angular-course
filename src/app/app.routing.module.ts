import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { path: "tree", loadChildren: () => import('./tree-container/app.treeContainer.module').then(m => m.AppTreeContainerModule) },
    { path: "list", loadChildren: () => import('./side-menu/app.side-menu.module').then(m => m.AppSideMenuModule) },
    { path: "", redirectTo: "list", pathMatch: "full" }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }