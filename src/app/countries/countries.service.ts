import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class CountriesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
   getCardDetails(): Observable<any>{
        return this.http.get("https://restcountries.eu/rest/v2/all")

      }


}