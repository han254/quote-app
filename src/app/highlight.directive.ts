import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private backgroundDeco(){

  }

  constructor(private elem: ElementRef) { 
    elem.nativeElement.style.backgroundcolor='darkorange';
  }

}
