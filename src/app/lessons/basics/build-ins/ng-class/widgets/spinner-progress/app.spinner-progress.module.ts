import { CommonModule } from '@angular/common';
import { AppSpinnerProgressComponent } from './app.spinner-progress.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AppSpinnerProgressComponent],
    imports: [CommonModule],
    exports: [AppSpinnerProgressComponent]
})
export class AppSpinnerProgressModule { }