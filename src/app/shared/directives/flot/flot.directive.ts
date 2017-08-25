import { Directive, HostListener, Input, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appFlot]'
})
export class FlotDirective implements OnInit {
  @Input() private options: any;
  @Input() private dataset: any;
  @Input() private height: string;
  initFlot: any = jQuery(this.el.nativeElement);

  constructor(private el: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.initFlot.plot(
      this.dataset,
      this.options
    )
  }

  ngOnInit() {
    this.initFlot.css({
      height: this.height
    });

    jQuery.plot(
      this.initFlot,
      this.dataset,
      this.options
    );

    // // Tooltips
    // this.initFlot.on('plothover', function (event, pos, item) {
    //   if (item) {
    //     let tipText: string;
    //     if (item.series.pie.show) {
    //       const p = item.datapoint[0].toFixed(2);
    //       tipText = `${p}%, ${item.series.label}`;
    //     } else {
    //       const x = item.datapoint[0].toFixed(item.series.curvedLines.active ? 2 : 0);
    //       const y = item.datapoint[1].toFixed(item.series.curvedLines.active ? 2 : 0);
    //       tipText = `${item.series.label} | x: ${x}; y: ${y}`;
    //     }
    //     jQuery('.flot-tooltip')
    //       .html(tipText)
    //       .css({ top: pos.pageY + 5, left: pos.pageX + 5 })
    //       .show();
    //   } else {
    //     jQuery('.flot-tooltip').hide();
    //   }
    // });
    // jQuery('body').append('<div class="flot-tooltip" />');
  }
}
