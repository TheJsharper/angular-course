import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'spinner-progress',
    templateUrl: './app.spinner-progress.component.html',
    styleUrls: ['./app.spinner-progress.component.scss']
})
export class AppSpinnerProgressComponent implements OnInit {
    value: number;
    procentage: number;
    procentageView:number;
    ngOnInit(): void {
        this.value = 99;
        this.procentage = this.value / 100 * 360;
    }





    getProgress(): { [key: string]: any } {
        
        return { "background": `conic-gradient(#5FDB6A ${this.procentage}deg, white ${this.procentage}deg 360deg)` };
    }
    getProcentage():{[key:string]:any}{
        return {}
    }
}