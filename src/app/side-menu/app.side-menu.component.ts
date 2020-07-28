import { Component } from '@angular/core';
@Component({
    selector:'side-menu',
    templateUrl:'./app.side-menu.component.html'
})
export class AppSideMenuComponent{
    typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}