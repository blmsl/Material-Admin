import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: [
      './visitors.component.scss'
  ]
})
export class VisitorsComponent implements OnInit {
  visitorsMap: any;
  visitorsData: any;

  constructor() {
    this.visitorsMap = {
      map: 'world_en',
      backgroundColor: '#fff',
      color: '#ebebeb',
      borderColor: '#ebebeb',
      hoverOpacity: 1,
      selectedColor: '#00BCD4',
      enableZoom: true,
      showTooltip: true,
      normalizeFunction: 'polynomial',
      selectedRegions: ['US', 'AU', 'BR', 'KR', 'JP'],
      onLabelShow: function(event, label, code) {
        if (code !== 'us' && code !== 'au' && code !== 'br' && code !== 'kr' && code !== 'jp') {
          event.preventDefault();
        }
      },
      onRegionClick: function(event, code, region) {
        event.preventDefault();
      }
    }

    this.visitorsData = [
      {
        date: 'Sunday, September 4, 21:44:02 (2 Mins 56 Seconds)',
        country: 'United States',
        browser: 'Firefox',
        os: 'Mac OSX',
        img: './assets/demo/img/flags/United_States_of_America.png'
      },
      {
        date: 'Sunday, September 4, 20:21:01 (5 Mins 12 Seconds)',
        country: 'Australia',
        browser: 'Chrome',
        os: 'Android',
        img: './assets/demo/img/flags/Australia.png'
      },
      {
        date: 'Sunday, September 4, 20:21:10 (10 Mins 43 Seconds)',
        country: 'Brazil',
        browser: 'Edge',
        os: 'Windows',
        img: './assets/demo/img/flags/Brazil.png'
      },
      {
        date: 'Sunday, September 4, 20:59:04 (1 Min 02 Seconds)',
        country: 'South Korea',
        browser: 'Chrome',
        os: 'Android',
        img: './assets/demo/img/flags/South_Korea.png'
      },
      {
        date: 'Sunday, September 4, 20:58:12 (3 Min 44 Seconds)',
        country: 'Japan',
        browser: 'Chrome',
        os: 'Windows',
        img: './assets/demo/img/flags/Japan.png'
      }
    ]
  }

  ngOnInit() {
  }

}
