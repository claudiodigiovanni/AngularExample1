import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-star',
  template: `
  <i class="fa fa-star-o" aria-hidden="true"></i>
  ` ,
  styleUrls: ['./star.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarComponent),
      multi: true
    }
  ]
})
export class StarComponent implements ControlValueAccessor, OnInit  {

  onChange: any = () => { };
  onTouched: any = () => { };


  constructor(){}

  ngOnInit(){}

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

  writeValue(value) {
    
  }

}