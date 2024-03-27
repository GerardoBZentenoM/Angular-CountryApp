import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSubscriptions?: Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.debouncerSubscriptions?.unsubscribe();
  }

  ngOnInit():void {
    this.debouncerSubscriptions = this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.onDebounce.emit(value)
      console.log("debouncer value: ", value)
    })
  }
  @Input()
  public placeholder: string = ""

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value:string):void{
    this.onValue.emit(value)
  }

  @Output()
  public onDebounce = new EventEmitter<string>();

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm)
  }
}
