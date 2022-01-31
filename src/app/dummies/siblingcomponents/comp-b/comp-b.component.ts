import { SiblingsService } from './../siblings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  messageFromCompA: any ='';
  objectFromCompA: any ='';
  arrayFromCompA;

  constructor(private sibling: SiblingsService) { }

  ngOnInit(): void {
    this.sibling.sendMessage.subscribe(message=>{
      console.log(message);
      this.messageFromCompA = message
    });
    this.sibling.sendObject.subscribe(obj=>{
      console.log(obj);
      this.objectFromCompA = obj
    });
    this.sibling.sendArray.subscribe(arr=>{
      console.log(arr);
      this.arrayFromCompA = arr
    });
  }

}
