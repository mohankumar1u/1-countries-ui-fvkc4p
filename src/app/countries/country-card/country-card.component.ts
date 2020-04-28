import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
   card: any;
  selectedBrand: string;
  darkmode: string;

  @Input()
  set OneInput({ card, selectedBrand, searchText, darkmode }) {
    //console.log(card)
    this.card = card;
    this.selectedBrand = selectedBrand;
    this.darkmode = darkmode;
  }

  constructor() { }

  ngOnInit() {
  }

}