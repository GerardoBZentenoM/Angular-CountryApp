import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1"
  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`).pipe(
      // tap(countries => console.log("Paso por el trap: ",countries)),
      // map(countries => []),
      // tap(countries => console.log("Tap Despues del map: ",countries)),
      catchError(error => of([]))
    );
  }

    searchCountry(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`).pipe(
      catchError(error => of([]))
    );
  }

    searchRegion(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`).pipe(
      catchError(error => of([]))
    );
  }
  searchCountryByAlphaCode(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${term}`).pipe(
      catchError(error => of([]))
    );
  }
}
