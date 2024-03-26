import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
constructor(private countriesService: CountriesService){

}

  public countries: Country[] = []

  searchByCapital(term:string){
    console.log("Sequiere buscar la capital: ",term);
    this.countriesService.searchCapital(term).subscribe( countries => {this.countries = countries })
  }
}
