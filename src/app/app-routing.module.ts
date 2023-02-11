import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { MenuComponent } from './menu/menu.component';
import { QuizzComponent } from './quizz/quizz.component';

const routes: Routes = [
  { path:"menu", component: MenuComponent },
  { path:"cours", component: CoursComponent },
  { path:"quizz", component: QuizzComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
