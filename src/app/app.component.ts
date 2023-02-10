import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CoursComponent } from './cours/cours.component';
import { QuizzComponent } from './quizz/quizz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'figures2style';
  constructor(private router :Router){
    
  }
  public clickCourse(){
    console.log("coucou le click")
    this.router.navigate(["/","cours"])
    .then(nav => {
      console.log("nav" + nav); // true if navigation is successful
    }, err => {
      console.log("erreur404"+ err) // when there's an error
    });
  }
}
