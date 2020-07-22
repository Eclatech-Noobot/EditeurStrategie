import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMetro4Module } from "ng-metro4";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { KeyboardShortcutsModule } from "ng-keyboard-shortcuts";
import { TableComponent } from './components/table/table.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMetro4Module,
    KeyboardShortcutsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
