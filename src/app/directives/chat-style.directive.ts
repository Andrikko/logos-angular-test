import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appChatStyle]'
})
export class ChatStyleDirective implements OnInit {

  @Input() value: any;
  @Input() addressedPerson: any;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    if (this.value.owner !== this.addressedPerson) {
      this.elementRef.nativeElement.parentNode.style.alignSelf = 'flex-end';
      this.elementRef.nativeElement.children[0].style.display = 'none';
    }
  }

}
