import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
//import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { DynamicDatabase } from './services/app.dynamic-database.service';
import { AppTreeComponent } from './views/app.tree.component';
@NgModule({
    declarations:[AppTreeComponent],
    imports:[MatIconModule, MatTreeModule, MatButtonModule,/* MatProgressBar,*/ CommonModule ],
    exports:[AppTreeComponent],
    providers:[DynamicDatabase]
})
export class AppTreeModule{}