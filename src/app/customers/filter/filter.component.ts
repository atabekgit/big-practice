import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  private _filter!:string;
  @Input() get filter(){
    return this._filter
  }
  set filter(val:string){
    this._filter = val
    this.changed?.emit(this.filter)
  }
  @Output() changed : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
