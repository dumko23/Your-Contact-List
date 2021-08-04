import {Component, Input, Output} from '@angular/core';
import {ShowFullDataService} from "../services/show-full-data.service";
import {filter} from "rxjs/operators";
import {EditContactService} from "../services/edit-contact.service";

export interface Contacts {
  name: string
  lastName: string
  phoneNumber: string
  address: any
  id: number
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent{

  constructor(public showFull: ShowFullDataService, public editCont: EditContactService) {
  }
 editContact(){
    console.log('check -editContact',this.showFull.fullData.id)
   this.yourContacts[this.showFull.fullData.id] = Object.assign(this.editCont.changedContact)
   this.showFull.fullData = {
     name: '',
     lastName: '',
     phoneNumber: '',
     address: '',
     id: NaN
   }
   this.editCont.changedContact = {
     name: '',
     lastName: '',
     phoneNumber: '',
     address: '',
     id: NaN
   }
  }
  search = ''
  removeContact(id:number){
    this.yourContacts = this.yourContacts.filter(p => p.id !== id)
    /*console.log(id)
    this.yourContacts.splice(id, 1)
    console.log(this.yourContacts)*/
    this.showRemove = !this.showRemove
  }
  updateContacts(contact: Contacts){
    this.yourContacts.push(contact)
  }
  num = NaN
  showId(target: Contacts[], target1: Contacts){
    this.num = target.indexOf(target1)
    console.log('check -showId', this.num)
    target1.id = this.num
  }
  removableContact = NaN
  removableContactName = ''
  showRemove = false
  yourContacts: Contacts[] = [
    {
      name: 'Angela',
      lastName: 'Hurts',
      phoneNumber: '+380684586452',
      address: 's',
      id: 0
    },
    {
      name: 'Melisa',
      lastName: 'Boner',
      phoneNumber: '+380986985463',
      address: 'd',
      id: 1
    },
    {
      name: 'Curt',
      lastName: 'Mourner',
      phoneNumber: '+380964587123',
      address: 'f',
      id: 2
    },
    {
      name: 'Lera',
      lastName: 'Lynn',
      phoneNumber: '+380975556311',
      address: 's',
      id: 3
    },
    {
      name: 'Inna',
      lastName: 'Takanabe',
      phoneNumber: '+380966969699',
      address: 'd',
      id: 4
    },
    {
      name: 'Ien',
      lastName: 'Hunt',
      phoneNumber: '+380671236689',
      address: 's',
      id: 5
    },
    {
      name: 'Ostyn',
      lastName: 'White',
      phoneNumber: '+380995458922',
      address: 's',
      id: 6
    },
    {
      name: 'Olivia',
      lastName: 'Phony',
      phoneNumber: '+380504500025',
      address: 's',
      id: 7
    },
    {
      name: 'Courtney',
      lastName: 'Miller',
      phoneNumber: '+380984123602',
      address: 'd',
      id: 8
    },
    {
      name: 'Stella',
      lastName: 'Artois',
      phoneNumber: '+380689936278',
      address: 'f',
      id: 9
    },
    {
      name: 'Shayne',
      lastName: 'Topp',
      phoneNumber: '+380675113695',
      address: 'g',
      id: 10
    },
    {
      name: 'Will',
      lastName: 'Wonka',
      phoneNumber: '+380994025961',
      address: 'a',
      id: 11
    },
    {
      name: 'Jim',
      lastName: 'Neutron',
      phoneNumber: '+380963666006',
      address: 's',
      id: 12
    },
    {
      name: 'Maria',
      lastName: 'Stuart',
      phoneNumber: '+380575264611',
      address: 'd',
      id: 13
    },
    {
      name: 'Kira',
      lastName: 'Daily',
      phoneNumber: '+380982336514',
      address: 'f',
      id: 14
    },
    {
      name: 'Bruce',
      lastName: 'Mayne',
      phoneNumber: '+380973156260',
      address: 's',
      id: 15
    },
    {
      name: 'Johanna',
      lastName: 'British',
      phoneNumber: '+380964125316',
      address: 'a',
      id: 16
    },
    {
      name: 'Trisha',
      lastName: 'Margold',
      phoneNumber: '+380680005689',
      address: 's',
      id: 17
    },
    {
      name: 'Natalie',
      lastName: 'Postman',
      phoneNumber: '+380973132511',
      address: 'd',
      id: 18
    },
    {
      name: 'Rosa',
      lastName: 'Orchideas',
      phoneNumber: '+380506661169',
      address: 'f',
      id: 19
    },
    {
      name: 'Jenifer',
      lastName: 'Venger',
      phoneNumber: '+380997516954',
      address: 's',
      id: 20
    }
  ]
}
