import { CommonModule } from '@angular/common';
import { AppPersonCardComponent } from './app.person-card.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [AppPersonCardComponent],
    imports: [CommonModule],
    exports: [AppPersonCardComponent]
})
export class AppPersonCardModule{}