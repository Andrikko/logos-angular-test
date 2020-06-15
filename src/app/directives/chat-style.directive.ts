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
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.parentNode.style.maxWidth = '85%';
    this.elementRef.nativeElement.style.alignItems = 'flex-start';
    this.elementRef.nativeElement.children[1].style.backgroundColor = '#3D4151';
    if (this.value.owner !== this.addressedPerson) {
      this.elementRef.nativeElement.parentNode.style.alignSelf = 'flex-end';
      this.elementRef.nativeElement.children[0].style.display = 'none';
      this.elementRef.nativeElement.children[1].style.backgroundColor = '#DFDFE0';
      this.elementRef.nativeElement.children[1].style.color = '#6D6C6D';
    }
  }

}
