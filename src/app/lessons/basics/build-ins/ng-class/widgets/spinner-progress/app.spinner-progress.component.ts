import { Component, OnInit, Input } from '@angular/core';
import { getRandMinMax } from 'src/db-data';
@Component({
    selector: 'spinner-progress',
    templateUrl: './app.spinner-progress.component.html',
    styleUrls: ['./app.spinner-progress.component.scss']
})
export class AppSpinnerProgressComponent implements OnInit {
    @Input("value") value: number;
    degrees: number;
    ngOnInit(): void {
        if (!this.value)
            this.value = getRandMinMax(1, 100);
        this.degrees = this.value / 100 * 360;
    }





    getProgress(): { [key: string]: any } {

        return { "background": `conic-gradient(#5FDB6A ${this.degrees}deg, white ${this.degrees}deg 360deg)` };
    }
   
}