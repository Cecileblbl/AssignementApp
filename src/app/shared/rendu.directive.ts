import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[apprendu]',
})
export class renduDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'green';
  }
}
