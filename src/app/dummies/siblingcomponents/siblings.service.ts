import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiblingsService {

  sendMessage = new Subject();
  sendObject = new Subject();
  sendArray = new Subject();

  constructor() { }

  communicateMessage(msg){
    this.sendMessage.next(msg);
  }
  communicateObject(obj){
    this.sendObject.next(obj);
  }
  
  communicateArray(arr){
    this.sendArray.next(arr);
  }
}

