import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from './../../../../model/user';
@Component({
   selector: 'output-child',
   templateUrl: './app.output-child.component.html',
   styleUrls: ['./app.output-child.component.scss']
})

export class AppOutputChildComponent implements OnInit {

   user: User;
   @Output("selectedProperty")
   selectedProperty: EventEmitter<[string, any]> = new EventEmitter<[string, any]>();

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

   OnSelectedProperty(element: HTMLDivElement | HTMLImageElement) {
      if (element instanceof HTMLDivElement) {
         if (element.innerHTML !== "") {

            const valuePairs: [string, any] = Array.from(Object.entries(this.user)).find((value: [string, any]) => value[1] == element.innerHTML.trim());
            this.selectedProperty.emit(valuePairs);
         }

         else {
            this.selectedProperty.emit(["status", element.classList.value]);
         }

      }
      if (element instanceof HTMLImageElement) {
         this.selectedProperty.emit(["avatar", element.src]);
      }

   }
}

