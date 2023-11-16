import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appsubmitted]',
})
export class renduDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }
}
