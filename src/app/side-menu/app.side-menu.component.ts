import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector:'side-menu',
    templateUrl:'./app.side-menu.component.html'
})
export class AppSideMenuComponent{
    typesOfShoes: string[] = ['pipe', 'component', 'directives', 'inputs', 'outputs'];
    constructor(private router:Router, private route:ActivatedRoute){}

    selectItem(sel:MatSelectionListChange ):void{
        console.log("==>", sel.option.value);
        this.router.navigate([`${sel.option.value}`], { relativeTo: this.route });
       // this.router.navigate([`${sel.option.value}`]);
    }
}