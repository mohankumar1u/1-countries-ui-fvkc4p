import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries/countries.service';


@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  countries:any;
  selectedCountry:any;
  darkmode:string;
  cardborders:any;


  constructor(private activatedRoute: ActivatedRoute,private countriesService: CountriesService, private router: Router) { }

  onBackToCountries(){
    this.router.navigate(['/countries']);
  }

  ngOnInit() {
      this.countriesService.countriesData.subscribe(countries=> this.countries = countries)
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.countries[id],"id");
    this.selectedCountry = this.countries[id];
      
  }

}