import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkmode = "darkmode-off";


  constructor(private commonService:CommonService) { }

  ngOnInit() {
     this.commonService.darkmodeStatus.subscribe(darkmode=>this.darkmode=darkmode);

  }
  darkmodeChange(){
    if(this.darkmode=='darkmode-off'){
       this.commonService.changemode('darkmode-on');
    }
    else{
       this.commonService.changemode('darkmode-off');

    }
     }

}