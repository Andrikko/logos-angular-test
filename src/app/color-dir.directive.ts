import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColorDir]'
})
export class ColorDirDirective {


  constructor(private el: ElementRef) {
    // this.highlight('yellow');
  }

  @Input('appColorDir') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  highlight(color: string) {
    // this.el.nativeElement.style.transition = '1s easy-in';
    this.el.nativeElement.style.backgroundColor = color;
  }

}
