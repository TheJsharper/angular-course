import { User } from './../../../../model/user';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'input-child',
    templateUrl: './app.input-child.component.html',
    styleUrls: ['./app.input-child.component.scss']
})
export class AppInputChildComponent implements OnInit {


    @Input('user') user:User;
    constructor() { }
    ngOnInit(): void {
        
    }

}



/*

{
  "name": "Avery",
  "username": "Avery.Christiansen",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kerihenare/128.jpg",
  "email": "Avery.Christiansen.Kertzmann57@yahoo.com",
  "dob": "1968-10-06T10:38:52.438Z",
  "phone": "165-669-2451 x3814",
  "address": {
    "street": "Tony Wall",
    "suite": "Suite 075",
    "city": "South Reggieland",
    "zipcode": "70149-7083",
    "geo": {
      "lat": "72.9572",
      "lng": "98.1147"
    }
  },
  "website": "frida.com",
  "company": {
    "name": "Mueller, Hirthe and Greenfelder",
    "catchPhrase": "Multi-layered zero administration Graphical User Interface",
    "bs": "leading-edge strategize architectures"
  }
}

*/