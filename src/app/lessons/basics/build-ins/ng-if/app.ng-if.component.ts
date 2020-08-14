import { SELLERS } from './../../../../../db-data';
import { Seller } from './../../../../model/person';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'ng-if',
    templateUrl: './app.ng-if.component.html',
    styleUrls: ['./app.ng-if.component.scss']

})
export class AppNgIfComponent implements OnInit {

    sellers: Seller[];
    ngOnInit(): void {
        this.sellers = SELLERS;
    }

}