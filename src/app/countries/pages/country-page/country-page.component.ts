import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
    )
    .subscribe((coutry) => {
      console.log(coutry);
      if(!coutry){
        return this.router.navigateByUrl('');
      }
      return this.country = coutry
    });
  }

  searchCountry(code: string) {
    this.countriesService
      .searchCountryByAlphaCode(code)
      .subscribe((country) => {
        console.log('country is: ', country);
      });
  }
}
