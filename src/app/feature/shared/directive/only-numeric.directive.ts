import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumeric]'
})
export class OnlyNumericDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement;
    const filteredValue = input.value.replace(/[^0-9]/g, '');
    if (input.value !== filteredValue) {
      input.value = filteredValue;
      event.preventDefault();
    }
  }
}
