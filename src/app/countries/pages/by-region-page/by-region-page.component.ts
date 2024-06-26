import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{
  constructor(private countriesService: CountriesService){

}
  ngOnInit(): void {
  this.countries = this.countriesService.cacheStore.byRegion.countries,
  this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }

  public regions: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  public countries: Country[] = []
  public selectedRegion?:Region;


  searchByRegion(region: Region){

    this.selectedRegion = region
    console.log("Searching region: ",region);
    this.countriesService.searchRegion(region).subscribe( countries => {this.countries = countries })
  }

}
