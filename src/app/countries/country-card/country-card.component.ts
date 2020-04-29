import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
   card: any;
  selectedBrand: string;
  darkmode: string;
  index:any;

  @Input()
  set OneInput({ card, selectedBrand, searchText, darkmode, index}) {
    //console.log(card)
    this.card = card;
    this.selectedBrand = selectedBrand;
    this.darkmode = darkmode;
    this.index = index;
  }

  constructor(private router: Router) { }
  singleItem(){
    this.router.navigate(['/SingleCountryDetails',this.index])
 console.log(this.index )
  }

  ngOnInit() {
  }

}