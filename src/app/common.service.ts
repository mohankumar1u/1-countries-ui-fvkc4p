import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommonService {
   private darkmode = new BehaviorSubject<string>("darkmode-off")
  darkmodeStatus =this.darkmode.asObservable();


  constructor() { }
  changemode(mode){
     this.darkmode.next(mode);
  }

}