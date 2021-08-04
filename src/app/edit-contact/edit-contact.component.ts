import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ShowFullDataService} from "../services/show-full-data.service";
import {ContactsComponent} from "../contacts/contacts.component";
import {EditContactService} from "../services/edit-contact.service";


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent{
  @ViewChild('editInputName', {static: false}) inputRefName!: ElementRef
  @ViewChild('editInputNumber', {static: false}) inputRefNumber!: ElementRef

  constructor(public showFull: ShowFullDataService, public editCont: EditContactService, public contact: ContactsComponent) { }
    name = this.showFull.fullData.name
    lastName = this.showFull.fullData.lastName
    phoneNumber = this.showFull.fullData.phoneNumber
    address = this.showFull.fullData.address
  showInput = false
  onComplete() {
    if (this.name.trim() && this.phoneNumber.trim()) {
      this.editCont.changedContact.name = this.name
      this.editCont.changedContact.lastName = this.lastName
      this.editCont.changedContact.phoneNumber = this.phoneNumber
      this.editCont.changedContact.address = this.address
      this.editCont.changedContact.id = this.showFull.fullData.id
      this.contact.editContact()
    } else if(!this.name.trim()){
      this.inputRefName.nativeElement.focus()
    } else {
      this.inputRefNumber.nativeElement.focus()
    }
  }
  onCancel(){
    this.editCont.changedContact = {
      name: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      id: NaN
    }
  }
}
