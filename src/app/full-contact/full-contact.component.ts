import { Component, OnInit } from '@angular/core';
import {ShowFullDataService} from "../services/show-full-data.service";
import {Contacts} from "../contacts/contacts.component";

@Component({
  selector: 'app-full-contact',
  templateUrl: './full-contact.component.html',
  styleUrls: ['./full-contact.component.css']
})
export class FullContactComponent implements OnInit {



  constructor(public showFull: ShowFullDataService) {
  }
  fullContact = Object.assign({},this.showFull.fullData)

  ngOnInit(): void {
  }


}
