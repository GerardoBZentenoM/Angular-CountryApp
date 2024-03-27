import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }

  public countries: Country[] = [];
  public isLoading: boolean = false;

  public initialValue: string = "";

  searchByCapital(term: string) {
    console.log('Sequiere buscar la capital: ', term);
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
