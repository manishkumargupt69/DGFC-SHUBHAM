import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement;
    const filteredValue = input.value.replace(/[^a-zA-Z0-9@._-]/g, '');
    if (input.value !== filteredValue) {
      input.value = filteredValue;
      event.preventDefault();
    }
  }}
