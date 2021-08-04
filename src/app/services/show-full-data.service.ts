import { Injectable } from '@angular/core';
import {Contacts} from "../contacts/contacts.component";


@Injectable({
  providedIn: 'root'
})
export class ShowFullDataService {
  fullData: Contacts ={
    name: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    id: NaN
  }
  showData(targetObj: Contacts){
    return this.fullData = Object.assign({}, targetObj)
  }

}
