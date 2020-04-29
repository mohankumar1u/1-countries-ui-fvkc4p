import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CountriesService {
  private countries = new BehaviorSubject<any[]>([])

  countriesData =this.countries.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
   getCardDetails(): Observable<any>{
     let obj = this.http.get("https://restcountries.eu/rest/v2/all")
     obj.subscribe(element => {
        this.countries.next(element);
     });
        return  obj;

      }

}