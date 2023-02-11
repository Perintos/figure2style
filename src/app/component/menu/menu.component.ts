import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {MenuModule} from 'primeng/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router:Router ){ }

  public clickCourse(){
    this.router.navigate(["/cours"]);
  }

  public clickQuizz(){
    this.router.navigate(["/quizz"]);
  }
}