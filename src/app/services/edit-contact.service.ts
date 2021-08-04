import { Injectable } from '@angular/core';
import {Contacts} from "../contacts/contacts.component";
import {ShowFullDataService} from "./show-full-data.service";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditContactService {
  sub = Subscription

  constructor(public showFull: ShowFullDataService) {
  }

  changedContact: Contacts = {
    name: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    id: NaN
  }

  editContact(target: Contacts, assigner: Contacts){
    console.log(target)
    console.log(assigner)
    target = Object.assign(assigner)
    console.log(target)
    this.showFull.fullData = {
      name: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      id: NaN
    }
  }

  /*endEdit(){
    this.sub.unsubscribe()
  }*/
}
