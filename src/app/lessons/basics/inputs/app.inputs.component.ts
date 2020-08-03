import { Component, OnInit } from '@angular/core';
import { User } from './children/app.input-child.component';
@Component({
    selector: 'inputs',
    templateUrl: './app.inputs.component.html',
    styleUrls: ['./app.inputs.component.scss']
})
export class AppInputsComponent implements OnInit {

    user: User;
    constructor() { }
    ngOnInit(): void {
        this.user = {
            name: "Avery",
            username: "Avery.Christiansen",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kerihenare/128.jpg",
            email: "Avery.Christiansen.Kertzmann57@yahoo.com",
            dob: new Date("1968-10-06T10:38:52.438Z"),
            phone: "165-669-2451 x3814",
        }
    }
}