import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

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

  @Output()
  public onValue = new EventEmitter<string>();
  emitValue(value:string):void{
    this.onValue.emit(value)
  }
}
