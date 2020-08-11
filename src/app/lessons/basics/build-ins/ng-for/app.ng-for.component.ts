import { Person } from './../../../../model/person';
import { PERSONS } from './../../../../../db-data';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'ng-for',
    templateUrl: 'app.ng-for.component.html',
    styleUrls: ['./app.ng-for.component.scss']
})

export class AppNgForComponent implements OnInit {
    persons: Person[] = PERSONS;

    ngOnInit(): void {
        this.persons = PERSONS.map((p: Person) => {
            return { ...p, read: this.getRandom(), views: this.getRandom(), coments: this.getRandom() }
        })
    }


    getRandom(): number {
        return Math.floor(Math.random() * 10000) + 100;
    }
}