import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';
import {ShowContactBtnComponent} from "./show-contact-btn/show-contact-btn.component";
import { FullContactComponent } from './full-contact/full-contact.component';
import { SortPipe } from './pipes/sort.pipe';
import { CreateContactComponent } from './create-contact/create-contact.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    EditContactComponent,
    FilterPipe,
    ShowContactBtnComponent,
    FullContactComponent,
    SortPipe,
    CreateContactComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
