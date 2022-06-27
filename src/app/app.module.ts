import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './conponents/navbar/navbar.component';
import { ContactManagerComponent } from './conponents/contact-manager/contact-manager.component';
import { AddContactComponent } from './conponents/add-contact/add-contact.component';
import { EditContactComponent } from './conponents/edit-contact/edit-contact.component';
import { ViewContactComponent } from './conponents/view-contact/view-contact.component';
import { SpinnerComponent } from './conponents/spinner/spinner.component';
import { PageNotFoundComponent } from './conponents/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    PageNotFoundComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
