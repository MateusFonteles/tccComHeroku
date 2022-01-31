import { SiblingsService } from './../siblings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  messageFromCompA="Hello Angular, I am CompA";

  objectFromCompA= {
    fname:"Murali",
    lname:"Krishna"
  };

  arrayFromCompA = ["Ashok", "Mallesh", "Murali"];

  constructor(private sibling: SiblingsService) { }

  ngOnInit(): void {
    this.sendInfoToCompB()
    this.sendObjectToCompB()
    this.sendArrayToCompB()

    }


    sendInfoToCompB(){
      this.sibling.communicateMessage(this.messageFromCompA)
    }

    sendObjectToCompB(){
      this.sibling.communicateObject(this.objectFromCompA)
    }

    sendArrayToCompB(){
      this.sibling.communicateArray(this.arrayFromCompA)
    }
}
