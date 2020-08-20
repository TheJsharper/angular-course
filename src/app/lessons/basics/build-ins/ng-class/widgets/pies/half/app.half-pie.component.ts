import { Seller } from './../../../../../../../model/person';
import { SELLERS } from './../../../../../../../../db-data';
import { Component, OnInit } from '@angular/core';
import { getRandMinMax } from 'src/db-data';
@Component({
    selector: 'half-pie',
    templateUrl: './app.half-pie.component.html',
    styleUrls: ['./app.half-pie.component.scss']
})
export class AppHalfPieComponent implements OnInit {

    ngOnInit(): void {
        const values: HalfPieValue[] = SELLERS.map((seller: Seller) => {
            return { label: seller.name, count: seller.points, };
        });
        const limit: number = values.reduce((prev: number, cur: HalfPieValue) => {
            return prev += cur.count;
        }, 0);
        const dataProcentages: HalfPieValue[] = values.map((value: HalfPieValue) => {
            return { label: value.label, count: value.count / limit * 100 };
        });

        const dataDegresses: HalfPieDataView[] = dataProcentages.map((value: HalfPieValue) => {
            return { label: value.label, degrees: value.count / 100 * 180, procentage:value.count };
        });
        const totalProcentages: number = dataProcentages.reduce((prev: number, cur: HalfPieValue) => { return prev += cur.count }, 0);

        const totalDegresses: number = dataDegresses.reduce((prev: number, cur: HalfPieDataView) => prev += cur.degrees, 0);

        console.log("dataProcenatges", dataProcentages, "DataDegreesses", dataDegresses, "limit", limit, "values", values, "total Procentages", totalProcentages, "Toatl Degresses", totalDegresses);



    }

    private getTwoHalfData(data: HalfPieValue[]): { firstHalf: HalfPieValue[], secondHalf: HalfPieValue[] } {
        const half: number = Math.ceil(data.length);
        return { firstHalf: data.splice(0, half), secondHalf: data.splice(-half) };
    }

    private getTwoHalfDataOrderedDegreeses(data: { firstHalf: HalfPieValue[], secondHalf: HalfPieValue[] }): { firstHalf: HalfPieValue[], secondHalf: HalfPieValue[] } {

          //  data.firstHalf.reduce(())
        return null;
    }


    private getColor(): string {
        return `rgba(${getRandMinMax(0, 255)},${getRandMinMax(0, 255)}, ${getRandMinMax(0, 255)}, .8)`;

    }

    getCssPoperty(): { [key: string]: any } {
        return { "background": `conic-gradient( ${this.getColor()} 0deg 20deg, ${this.getColor()} 20deg 90deg, white 90deg 270deg, ${this.getColor()} 270deg  280deg, ${this.getColor()} 280deg 305deg, ${this.getColor()} 305deg 345deg, ${this.getColor()} 345deg 360deg  )` }

    }
}

export interface HalfPieValue {
    label: string;
    count: number;
}
export interface HalfPieDataView{
    label:string,
    procentage:number;
    degrees:number;
} 