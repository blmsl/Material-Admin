import { Directive, ElementRef, OnInit } from '@angular/core';
import '../../../../../node_modules/autosize/dist/autosize.js';

declare var autosize: any;

@Directive ({
    selector: '[appAutosize]'
})

export class AutosizeDirective implements OnInit {
    constructor (private el: ElementRef) { }

    ngOnInit() {
        const initAutosize = $(this.el.nativeElement);

        autosize(initAutosize);
    }
}
