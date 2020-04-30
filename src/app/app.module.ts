import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CountriesService } from './countries/countries.service';
import { CountryCardComponent } from './countries/country-card/country-card.component';
import { CommonService } from './common.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, Ng2SearchPipeModule,
    MatFormFieldModule, MatSelectModule, MatInputModule,BrowserAnimationsModule,  ReactiveFormsModule ],
  declarations: [ AppComponent, HeaderComponent, CountriesComponent, SingleCountryComponent, CountryCardComponent],
  bootstrap:    [ AppComponent ],
  providers: [  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  CountriesService, CommonService]
})
export class AppModule { }
