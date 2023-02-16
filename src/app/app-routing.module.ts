import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './component/cours/cours.component';
import { MenuComponent } from './component/menu/menu.component';
import { QuizzComponent } from './component/quizz/quizz.component';
import { SheetComponent } from './component/sheet/sheet.component';

const routes: Routes = [
  { path:"menu", component: MenuComponent },
  { path:"cours", component: CoursComponent },
  { path:"quizz", component: QuizzComponent },
  { path:"sheet/:id", component: SheetComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
