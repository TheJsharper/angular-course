import { SELLERS } from './../../../../../../db-data';
import { Component, Input, OnInit } from '@angular/core';
import { Seller } from './../../../../../model/person';
@Component({
    selector: 'ng-if-children',
    templateUrl: './app.ng-if-children.component.html',
    styleUrls: ['./app.ng-if-children.component.scss']
})
export class AppNgIfChildrenComponent implements OnInit {

    progressColors: Map<number, string>;
    @Input('seller') seller: Seller;
    constructor() {

    }
    ngOnInit(): void {
        // this.seller = SELLERS[1];
        this.progressColors = new Map<number, string>();
        this.progressColors.set(0, " #ffffff")
        this.progressColors.set(5, "#ebf9eb")
        this.progressColors.set(10, "#d8f3d8")
        this.progressColors.set(15, "#c4edc4")
        this.progressColors.set(20, "#b1e7b1")
        this.progressColors.set(25, "#9de19d")
        this.progressColors.set(30, "#8adb8a")
        this.progressColors.set(35, "#76d576")
        this.progressColors.set(40, "#63cf63")
        this.progressColors.set(45, "#4fc94f")
        this.progressColors.set(50, "#3cc33c")
        this.progressColors.set(55, "#36b036")
        this.progressColors.set(60, "#309c30")
        this.progressColors.set(65, "#2a892a")
        this.progressColors.set(70, "#247524")
        this.progressColors.set(75, "#1e621e")
        this.progressColors.set(80, "#184e18")
        this.progressColors.set(85, "#123b12")
        this.progressColors.set(90, "#0c270c")
        this.progressColors.set(95, "#061406")
        this.progressColors.set(100, "#000000")
    }
    getProgress(percent: number): { [key: string]: any } {

        let teenUnit: number = Math.round(percent / 10);
        const teenMod: number = percent % 10;
        let index: number = 0;
        if (teenMod > 5 && teenUnit >= 1 && percent <= 95) {
            teenUnit++;
            index = teenUnit * 10;
        } else if (teenMod < 5 && teenUnit >= 1) {
            index = teenUnit * 10;
        } else if (teenMod == 5 || teenMod == 0) {
            index = percent;
        } else if (percent >= 95) {
            index = 100;
        } else {
            index = 5;
        }
        return {
            'background-color': this.progressColors.get(index),
            "width": `${percent}%`,
            "border-top-right-radius": percent > 95 ? "14px" : "0px",
            "border-bottom-right-radius": percent > 95 ? "14px" : "0px"
        }
    }
    getFontColor(percent: number): { [key: string]: any } {
        return percent > 60 ? { "color": "white" } : { "color": "black" };

    }
}