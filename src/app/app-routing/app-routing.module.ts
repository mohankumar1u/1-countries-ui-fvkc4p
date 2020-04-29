import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,  RouterModule} from '@angular/router';
import { CountriesComponent } from '../countries/countries.component';
import { SingleCountryComponent } from '../single-country/single-country.component';

const routes: Routes = [ 
  { path: 'countries',component: CountriesComponent},
  { path:'SingleCountryDetails/:id',component:SingleCountryComponent}
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }