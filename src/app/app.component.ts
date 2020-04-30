import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  darkmode:string;
  name = 'Angular';

  constructor( private commonService:CommonService) { }

    ngOnInit() {
    this.commonService.darkmodeStatus.subscribe(darkmode=>this.darkmode=darkmode);
    }
}
