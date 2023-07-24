import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './register/employee/employee.component';
import { ListComponent } from './register/employee/list/list.component';
import { RegisterComponent } from './register/employee/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
