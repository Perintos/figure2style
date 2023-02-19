import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

declare var device:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'figures2style';
  protected items: MenuItem[]=[];
  protected activeItem!: MenuItem;

  ngOnInit(){
    this.activeItem = this.items[0];
    this.router.navigate(["/","menu"])
    this.items = [
      {label: 'Accueil', icon: 'pi pi-fw pi-home', routerLink:['/menu']},
      {label: 'Cours', icon: 'pi pi-fw pi-list', routerLink:['/cours']},
      {label: 'Quizz', icon: 'pi pi-fw pi-question', routerLink:['/quizz']}
    ];

    document.addEventListener("deviceready", () => {
      alert(device.platform);
    },false);
  }

  constructor(private router :Router){
    
  }
}



