import {Directive, ElementRef, Input, SimpleChanges} from '@angular/core';
import {isUndefined} from "util";

@Directive({
   selector: '[focusedControl]'
})
export class FocusDirectiveDirective{

   @Input() focusedControl: string;
   @Input("magic") id: string;

   constructor(
      private element: ElementRef,
   ) {}

  ngOnChanges(changes: SimpleChanges)
  {
    //alert("FocusDirectiveDirective:ngOnChanges()");
    if (changes["focusedControl"] &&
      (!isUndefined(changes["focusedControl"].currentValue)) &&
      (changes["focusedControl"].currentValue === this.id)
    ) {
      this.element.nativeElement.focus();
    }
  }
}
