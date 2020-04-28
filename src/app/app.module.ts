import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountriesComponent } from './countries/countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CountriesService } from './countries/countries.service';
import { CountryCardComponent } from './countries/country-card/country-card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, Ng2SearchPipeModule ],
  declarations: [ AppComponent, HeaderComponent, CountriesComponent, SingleCountryComponent, CountryCardComponent,],
  bootstrap:    [ AppComponent ],
  providers: [CountriesService]
})
export class AppModule { }
