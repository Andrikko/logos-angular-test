import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {SimplePlaceholderMapper} from '@angular/compiler/src/i18n/serializers/serializer';

@Directive({
  selector: '[appCutMessage]'
})
export class CutMessageDirective{

  @Input('message') message: string;
  
  constructor(private el: ElementRef) {
  }

}
