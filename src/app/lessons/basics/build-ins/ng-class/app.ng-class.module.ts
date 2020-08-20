import { AppHalfPieModule } from './widgets/pies/half/app.half-pie.module';
import { AppWholePieModule } from './widgets/pies/whole/app.whole-pie.module';
import { AppSpinnerProgressModule } from './widgets/spinner-progress/app.spinner-progress.module';
import { NgModule } from "@angular/core";
import { AppNgClassComponent } from "./app.ng-class.component";

@NgModule({
    declarations:[AppNgClassComponent],
    imports:[AppSpinnerProgressModule, AppWholePieModule, AppHalfPieModule],
    exports:[AppNgClassComponent]

})
export class AppNgClassModule{}