import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country';
import { catchError, delay, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

private getCountriesRequest(url:string): Observable<Country[]>{
  return this.http.get<Country[]>(url).pipe(catchError((error) => of([])),
  delay(2000));

}

  constructor(private http: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url)
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.getCountriesRequest(url)
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`
    return this.getCountriesRequest(url)

  }
  searchCountryByAlphaCode(term: string): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${term}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }
}
