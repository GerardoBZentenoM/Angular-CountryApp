import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  public placeholder: string = ""

}
