
import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[cal-change]',
  host: {
    '(onChange)': "trimLastCharacter($event, date)"
  }
})

export class LimitToDirective {

  @Input('limit-to') limitTo;
  @Input('options') options;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  oldValue: any;

  constructor() { }

  trimLastCharacter(control) {
    console.log(control)
    console.log(this.options)
  }
}
