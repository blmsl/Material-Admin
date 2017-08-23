import { Directive, HostListener, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appFormControlFloat]'
})
export class InputFloatDirective implements OnInit {
  elem: any = this.el.nativeElement;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('blur')
  onBlur() {
    const status = true ? this.elem.value : false;
    this.renderer.setElementClass(this.elem, 'form-control--active', status)
  }

  ngOnInit() {
    if (this.elem.value) {
      this.renderer.setElementClass(this.elem, 'form-control--active', true)
    }
  }
}
