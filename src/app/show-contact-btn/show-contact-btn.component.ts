import {Component} from '@angular/core';
import {ShowFullDataService} from "../services/show-full-data.service";
import {Contacts} from "../contacts/contacts.component";

@Component({
  selector: 'app-show-contact-btn',
  templateUrl: './show-contact-btn.component.html',
  styleUrls: ['./show-contact-btn.component.css']
})
export class ShowContactBtnComponent{
  constructor(public showFull: ShowFullDataService) {
  }
  showContact: boolean = false
  changeView(){
    setTimeout(() =>{
      this.showContact = !this.showContact
    }, 0)
  }
  showHide = 'Show More'
  onContactClick(){
    if(this.showHide === 'Show More'){
      this.showHide = 'Hide'
    }else {
      this.showHide = 'Show More'
    }
  }

}
