import { Person } from './../../../../../model/person';
import { Component, Input } from '@angular/core';
@Component({
    selector: 'ng-for-children',
    templateUrl: './app.ng-for-children.component.html',
    styleUrls: ['./app.ng-for-children.component.scss']
})
export class AppNgForChildrenComponent {
    @Input("person")
    person: Person/*= {
        name: "Ms. Ted Hickle",
        dateOfBirth: "1962-3-2",
        streetAddress: "142 Otha Street",
        city: "Port Bernita, MT CN1 9EL",
        state: "MT",
        zip: "CN1 9EL",
        userName: "Ted49",
        password: "zPIHf1GTLMvZyUW",
        email: "Ted.Hickle79@hotmail.com",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/nicollerich/128.jpg"
    };*/
    constructor() {

    }
}