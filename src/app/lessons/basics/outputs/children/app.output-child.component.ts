import { User } from './../../../../model/user';
import { Component, OnInit } from '@angular/core';
@Component({
   selector: 'output-child',
   templateUrl: './app.output-child.component.html',
   styleUrls: ['./app.output-child.component.scss']
})

export class AppOutputChildComponent implements OnInit {

   user: User;

   constructor() { }


   ngOnInit(): void {
      this.user = {
         name: "Therese",
         username: "Therese.Heaney",
         avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/chrisvanderkooi/128.jpg",
         email: "Therese.Heaney_Conroy@yahoo.com",
         dob: new Date("1959-12-15T14:43:35.923Z"),
         phone: "1-858-175-3504 x5144"
      }
   }
}

