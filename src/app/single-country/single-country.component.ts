import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  cards:any;
  selectedCard:any;
  darkmode:string;
  cardborders:any;


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
     this.cards = localStorage.getItem('countries')
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id),"id";
    this.selectedCard = this.cards[id];
      
  }

}