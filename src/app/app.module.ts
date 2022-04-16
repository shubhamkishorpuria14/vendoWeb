import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DataTablesModule} from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes} from '@angular/router';

import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { StaticComponentComponent } from './static-component/static-component.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'staticData',
        component: StaticComponentComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    StaticComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
