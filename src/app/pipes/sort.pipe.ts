import { Pipe, PipeTransform } from '@angular/core';
import {Contacts} from "../contacts/contacts.component";

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(yourContacts: Contacts[]): Contacts[] {
    return yourContacts.sort(function(a, b){
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    });
  }

}
