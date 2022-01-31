import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 
 // private messageSource = new BehaviorSubject<string>("default message");
 // currentMessage = this.messageSource.asObservable(); 
 private messageSource = new Subject<string>();
 currentMessage = this.messageSource.asObservable(); 


 constructor() { }

sendMessage(message:string){
 this.messageSource.next(message);
}
 //changeMessage(message:string){
 // this.messageSource.next(message)
 }
