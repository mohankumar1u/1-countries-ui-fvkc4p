import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { CountriesService } from './countries.service'
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  cards: any;
  title = "Angular Search Using ng2-search-filter";
  region = [];
  selectedBrand = "filter by Region";
  searchText;

  constructor(private router: Router, private countriesService:CountriesService ) { }

  ngOnInit() {
    this.loadCountries();
    }
  loadCountries=()=>{
    this.countriesService.getCardDetails().subscribe(element => {
      //console.log(element, "cards")
      this.cards = element;
       //console.log(this.cards)
       localStorage.setItem('countries', this.cards);

      let obj = [];
      for (let [key, value] of Object.entries(this.cards)) {
        obj.push(value.region);
      }
      this.region = obj.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      });
      this.region[6] = "filter by Region";
      console.log(this.region);
  });
  };

}