import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TabMenuModule} from 'primeng/tabmenu';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CoursComponent } from './component/cours/cours.component';
import { QuizzComponent } from './component/quizz/quizz.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SheetComponent } from './component/sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    QuizzComponent,
    MenuComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TabMenuModule,
    ButtonModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
