import { AppInputsModule } from './../lessons/basics/inputs/app.inputs.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppCoursesListModule } from './../courses-list/app.courses-list.module';
import { AppSideMenuRoutingModule } from './app.side-menu.-routing.module';
import { AppSideMenuComponent } from './app.side-menu.component';

@NgModule({
    declarations: [AppSideMenuComponent],
    imports: [MatExpansionModule,
        AppSideMenuRoutingModule,
        MatIconModule,
        AppCoursesListModule,
        MatListModule,
        CommonModule,
        AppInputsModule
    
    ],
    exports: [AppSideMenuComponent]
})
export class AppSideMenuModule { }