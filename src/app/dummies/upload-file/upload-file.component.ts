import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  base64: string = "Base64...";
  fileSelected?: Blob;
  imageUrl?: string;
  myimage: Observable<any>


  constructor(private sant: DomSanitizer) { }


  ngOnInit(): void {
  }

  onChange($event){
    const file=($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file:File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe(
      (d) => {
        this.myimage = d;
            },
            (error) => {
              alert(error);
            }
    )
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload=()=>{
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
      
    }
  }
 
