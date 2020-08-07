import { Component, Input } from '@angular/core';
@Component({
    selector: 'output-display',
    templateUrl: './app.output-display.component.html',
    styleUrls: ['./app.output-display.component.scss']
})
export class AppOutputDisplayComponent {
    @Input("selectedProperty") selectedProperty: [string, any];


    getStyle(i: number): { [key: string]: any } {


        if (i == 1 && this.selectedProperty[0] == "avatar") return this.getImageBackground();
        if (i == 0) {
            if (this.selectedProperty[i] == "status") {
                return { "with": "0.9%" };
            }
            return { "flex": 1 };
        } else {
            return { "flex": 4 };
        }

    }
    getFormatter(item: any, i: number): string {
        if (item == "dob") {
            return "Birthday";
        }
        if (this.selectedProperty[0] == "avatar" || this.selectedProperty[0] == "status") return "";
        if (i == 0) {
            const value: string = item as string;

            return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
        }

        return i == 0 ? (<string>item).charAt(0).toUpperCase() + (<string>item).slice(1) : item;
    }
    getImageBackground(): { [key: string]: any } {
        return { "background-image": `url(${this.selectedProperty[1]})`, "flex": 4, "with": "200px", "height": "200px", "background-repeat": "no-repeat" };
    }

}