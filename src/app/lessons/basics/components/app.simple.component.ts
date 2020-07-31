import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'simple-component',
    templateUrl: "./app.simple.component.html",
    styleUrls: ['./app.simple.component.scss']

})
export class AppSimpleComponent implements OnInit {

    animals: Animal[];
    firstName: Animal;
    secondName: Animal;
    lastName: Animal;


    ngOnInit(): void {
        this.animals =
            [
                {
                    name: "Felix",
                    OwnName: "John Smith",
                    city: "New York, 350 Fifth Ave, New York, NY 10118 ",
                    diagnostic: "Potentially Toxic Levels of Vitamin D in Several Dry Pet Foods but His heathly is currently pretty well",
                    lastTheatment: new Date(20, 7, 2020),
                    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg"
                },
                {
                    name: "Sam",
                    OwnName: "Liam Williams ",
                    city: "New York, NY 10019-2503, ",
                    diagnostic: "Exogenous Hyperthyroidism and Thyroid Hormones in Pet Food",
                    lastTheatment: new Date(20, 7, 2020),
                    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/sta1ex/128.jpg"
                },
                {
                    name: "Smokey",
                    OwnName: "James Jackson",
                    city: "Bloomingdale's, New York, NY 10022 ",
                    diagnostic: "His heathly is currently pretty well",
                    lastTheatment: new Date(20, 7, 2020),
                    photo: "https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg"
                }
            ];
        this.firstName = this.animals[0];
        this.secondName = this.animals[1];
        this.lastName = this.animals[2];

    }




}
export class Animal {
    name: string;
    OwnName: string;
    city: string;
    diagnostic: string;
    lastTheatment: Date;
    photo: string
}