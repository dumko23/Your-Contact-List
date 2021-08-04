import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Contacts, ContactsComponent} from "../contacts/contacts.component";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  @ViewChild('createInputName', {static: false}) inputRefName!: ElementRef
  @ViewChild('createInputNumber', {static: false}) inputRefNumber!: ElementRef
  @Output() onAdd: EventEmitter<Contacts> = new EventEmitter<Contacts>()
  constructor(private contactList: ContactsComponent) { }

  showCreate = false
  newContact = {
    name: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    id: NaN
  }
  addContact(){
    if(this.newContact.name.trim() && this.newContact.phoneNumber.trim()){
      const contact: Contacts = {
        name: this.newContact.name,
        lastName: this.newContact.lastName,
        phoneNumber: this.newContact.phoneNumber,
        address: this.newContact.address,
        id: this.contactList.yourContacts.length
      }
      this.onAdd.emit(contact)
      this.newContact.name = this.newContact.lastName = this.newContact.phoneNumber = this.newContact.address = ''
      this.showCreate = !this.showCreate
    } else if(!this.newContact.name.trim()){
        this.inputRefName.nativeElement.focus()
    } else {
        this.inputRefNumber.nativeElement.focus()
    }
  }
  /*afterContactCreation(){
    if(this.newContact.name.trim() && this.newContact.phoneNumber.trim()){
      this.showCreate = !this.showCreate
    }
  }*/



  ngOnInit(): void {
  }

}
