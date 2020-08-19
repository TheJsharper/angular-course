import { Component, OnInit } from '@angular/core';
import { getRandMinMax } from 'src/db-data';
@Component({
    selector: 'whole-pie',
    templateUrl: './app.whole-pie.component.html',
    styleUrls: ['./app.whole-pie.component.scss']

})
export class AppWholePieComponent implements OnInit {
    values: PieValue[];
    conicProperty: string;


    ngOnInit(): void {
        this.values = this.generatePieValues();
        this.conicProperty = this.generateGradientProperty();

    }
    private getColor(): string {
        return `rgba(${getRandMinMax(0, 255)},${getRandMinMax(0, 255)}, ${getRandMinMax(0, 255)}, .8)`;
    }
    getCssPoperty(): { [key: string]: any } {
        return { "background": this.conicProperty }
        //   return { "background": `conic-gradient( ${this.getColor()} 0% 40%, ${this.getColor()}  40% 70%, ${this.getColor()}  40% 360%)` }

    }
    private generatePieValues(): PieValue[] {
        const lenght: number = getRandMinMax(1, 100);
        return Array.from(Array(lenght).keys())
            .reduce((prev: PieValue[], _) => {

                prev.push({ colors: this.getColor(), procentage: (100 / lenght).toFixed(2) })
                return prev;
            }, []);
    }
    private generateGradientProperty(): string {
        let total: number = 0;
        return this.values.reduce((prev: string, cur: PieValue, index: number) => {
            if (index == 0) {
                prev = `conic-gradient(${cur.colors} 0% ${cur.procentage}%`;
            } else if (index == this.values.length - 1) {
                total += parseFloat(this.values[index - 1].procentage);
                prev = `${prev}, ${cur.colors} ${total}% ${parseFloat(cur.procentage) + total}%) `;
            } else {
                total += parseFloat(this.values[index - 1].procentage);
                prev = `${prev}, ${cur.colors} ${total}% ${parseFloat(cur.procentage) + total}%`;
            }
            return prev;
        }, "")
    }
}


export interface PieValue {
    colors?: string;
    procentage?: string;
}