import { Seller } from './../../../../../../../model/person';
import { SELLERS } from './../../../../../../../../db-data';
import { Component, OnInit, Input } from '@angular/core';
import { getRandMinMax } from 'src/db-data';
@Component({
    selector: 'half-pie',
    templateUrl: './app.half-pie.component.html',
    styleUrls: ['./app.half-pie.component.scss']
})
export class AppHalfPieComponent implements OnInit {
    
    @Input("values")values:HalfPieValue[];
    
    data: SplitDataView;


    ngOnInit(): void {

        if(!this.values)
        this.values = this.getValues();

        const limited: number = this.getLimited(this.values);

        const dataProcentages: HalfPieValue[] = this.getDataProcentages(this.values, limited);

        const dataDegresses: HalfPieDataView[] = this.getHalfPieDataView(dataProcentages);


        const totalProcentages: number = this.getTotalProcentages(dataDegresses);


        const totalDegresses: number = this.getTotalDegreeses(dataDegresses);

        const twoHalfDataView: SplitDataView = this.getTwoHalfData(dataDegresses, limited);

        const data: SplitDataView = this.getTwoHalfDataOrderedDegreeses(twoHalfDataView);
        this.data = data;
        //  console.log("dataProcenatges", dataProcentages, "DataDegreesses", dataDegresses, "limit", limited, "values", values, "total Procentages", totalProcentages, "Toatl Degresses", totalDegresses, "split data", twoHalfDataView);



    }

    private getValues(): HalfPieValue[] {
        const values: HalfPieValue[] = SELLERS.map((seller: Seller) => {
            return { label: seller.name, count: seller.points, };
        });
        return values;
    }

    private getLimited(data: HalfPieValue[]): number {
        const limit: number = data.reduce((prev: number, cur: HalfPieValue) => {
            return prev += cur.count;
        }, 0);
        return limit;
    }

    private getDataProcentages(values: HalfPieValue[], limited: number): HalfPieValue[] {
        const dataProcentages: HalfPieValue[] = values.map((value: HalfPieValue) => {
            return { label: value.label, count: value.count / limited * 100 };
        });
        return dataProcentages;

    }

    private getHalfPieDataView(data: HalfPieValue[]): HalfPieDataView[] {
        const dataDegresses: HalfPieDataView[] = data.map((value: HalfPieValue) => {
            return { label: value.label, degrees: value.count / 100 * 180, procentage: value.count, color: this.getColor() };
        });
        return dataDegresses;
    }


    private getTotalProcentages(data: HalfPieDataView[]): number {
        return data.reduce((prev: number, cur: HalfPieDataView) => prev += cur.procentage, 0);
    }

    private getTotalDegreeses(data: HalfPieDataView[]): number {
        return data.reduce((prev: number, cur: HalfPieDataView) => prev += cur.degrees, 0)
    }

    private getTwoHalfData(data: HalfPieDataView[], limited: number): SplitDataView {
        const half: number = Math.ceil(data.length / 2);

        const firstHalf: HalfPieDataView[] = data.splice(0, half);
        const secondHalf: HalfPieDataView[] = data.splice(-half);
        const newData: HalfPieDataView[] = secondHalf.concat(firstHalf);
        return { firstHalf, secondHalf, limited, data: newData };
    }

    private getTwoHalfDataOrderedDegreeses(data: SplitDataView): SplitDataView {


        const first: string = this.getCssGradientProperty(data.firstHalf, 0);
        const second: string = this.getCssGradientProperty(data.secondHalf, 270);
        return { limited: data.limited, firstHalf: data.firstHalf, secondHalf: data.secondHalf, firstHalfGradientProperty: first, secondHalfGradientProperty: second, data: data.data };
    }

    private getCssGradientProperty(data: HalfPieDataView[], initialDegrees: number): string {
        const result: { result: string, lastDegress: number } = data.reduce((prev: { result: string, lastDegress: number }, cur: HalfPieDataView, index: number, curData: HalfPieDataView[]) => {
            if (index == 0) {
                if (prev.lastDegress == 0)
                    prev.result = `${cur.color} ${prev.lastDegress}deg ${cur.degrees}deg`;
                else
                    prev.result = `${cur.color} ${prev.lastDegress}deg ${cur.degrees + prev.lastDegress}deg`;
            } else if (index == curData.length - 1) {
                prev.lastDegress += curData[index - 1].degrees;
                if (initialDegrees == 0)
                    prev.result = `${prev.result}, ${cur.color} ${prev.lastDegress}deg ${cur.degrees + prev.lastDegress}deg,`;
                else
                    prev.result = `${prev.result}, ${cur.color} ${prev.lastDegress}deg ${cur.degrees + prev.lastDegress}deg`;
            } else {
                prev.lastDegress += curData[index - 1].degrees;
                prev.result = `${prev.result}, ${cur.color} ${prev.lastDegress}deg ${cur.degrees + prev.lastDegress}deg`;
            }
            return prev;
        }, { result: "", lastDegress: initialDegrees });
        return result.result;
    }


    private getColor(): string {
        return `rgba(${getRandMinMax(0, 255)},${getRandMinMax(0, 255)}, ${getRandMinMax(0, 255)}, .8)`;

    }

    getCssPoperty(): { [key: string]: any } {

        return { "background": `conic-gradient(${this.data.firstHalfGradientProperty} white 90deg 270deg, ${this.data.secondHalfGradientProperty})` }

    }
    getTitlePosition(index:number):{[key:string]:any}{
        const xPoint:number = 75 *index;
       // return {'transform':`translate(${xPoint}px, -60px) rotate(-70deg)`, }
       return {'transform':`translate(${xPoint}px, 0px) rotate(-70deg)`, }
    }
}

export interface HalfPieValue {
    label: string;
    count: number;
}
export interface HalfPieDataView {
    label: string,
    procentage: number;
    degrees: number;
    color?: string;
}
export interface SplitDataView {
    limited: number;
    firstHalf?: HalfPieDataView[];
    secondHalf?: HalfPieDataView[];
    firstHalfGradientProperty?: string;
    secondHalfGradientProperty?: string;
    data?: HalfPieDataView[]
}