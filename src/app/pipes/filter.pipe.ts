import { Pipe, PipeTransform } from '@angular/core';
import {Contacts} from "../contacts/contacts.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(yourContacts: Contacts[], search: string = ''): Contacts[] {
    if(!search.trim()){
      return yourContacts
    }
    return yourContacts.filter(contact => {
      return contact.name.toLowerCase().includes(search.toLowerCase())
        || contact.lastName.toLowerCase().includes(search.toLowerCase())
        || contact.phoneNumber.includes(search)
    })
  }



}
