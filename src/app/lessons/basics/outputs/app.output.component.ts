import { Component } from '@angular/core';
@Component({
    selector: 'output',
    templateUrl: './app.output.component.html',
    styleUrls: ['./app.output.component.scss']
})
export class AppOutputComponent {
    selectedPropery: [string, any];
    OnSelectedProperty(selected: [string, any]): void {

        this.selectedPropery = selected;
    }
}