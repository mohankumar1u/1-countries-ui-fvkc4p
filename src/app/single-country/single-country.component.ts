import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries/countries.service';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  countries:any;
  selectedCountry:any;
  darkmode:string;
  borders=[];


  constructor(private activatedRoute: ActivatedRoute,private countriesService: CountriesService, private router: Router, private commonService:CommonService) { }

  onBackToCountries(){
    this.router.navigate(['/countries']);
  }
  async goToBorderCountry(border){
    console.log("border")
    await this.router.navigate(['/SingleCountryDetails',border.id]);
     this.selectedCountry = this.countries[border.id];
     this.borders=[];
     this.ngOnInit();
  }

  ngOnInit() {
     this.commonService.darkmodeStatus.subscribe(darkmode=>this.darkmode=darkmode);

      this.countriesService.countriesData.subscribe(countries=> this.countries = countries)
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.countries[id],id);
    this.selectedCountry = this.countries[id];
    for(let i=0;i<this.selectedCountry.borders.length; i++){
       for (let [key, value] of Object.entries(this.countries)) {
       if(this.selectedCountry.borders[i]==value.alpha3Code){
         value["id"]=key;
         this.borders.push(value);  
       }
        //obj.push(value.region);
        // Object.assign(this.region , {key: value.region});
      }
    }
    console.log(this.borders);
      
  }

}