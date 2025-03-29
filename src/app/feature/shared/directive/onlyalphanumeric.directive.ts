import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnlyalphanumeric]'
})
export class OnlyalphanumericDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const input = this.el.nativeElement;
    const filteredValue = input.value.replace(/[^a-zA-Z0-9]/g, '');
    if (input.value !== filteredValue) {
      input.value = filteredValue;
      event.preventDefault();
    }
  }

}
