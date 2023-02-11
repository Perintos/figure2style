import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CoursComponent } from './component/cours/cours.component';
import { QuizzComponent } from './component/quizz/quizz.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './service/mock.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    QuizzComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
