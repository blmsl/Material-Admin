import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RoutesRecognized,
  RouteConfigLoadStart,
  RouteConfigLoadEnd
} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})

export class LayoutComponent implements OnInit {
  isFullscreen: boolean;
  fullscreenUrls: string[] = ['/logout', '/login', '/register', '/forgot-password'];

  constructor(private router: Router) {

    router.events.subscribe(event => {
      // NavigationStart
      if(event instanceof NavigationStart) {
        // console.log('NavigationStart');
      }
      // NavigationEnd
      if(event instanceof NavigationEnd) {
        // console.log('NavigationEnd');
        this.isFullscreen = this.fullscreenUrls.includes(router.url) ? true : false;
      }
      // NavigationCancel
      if(event instanceof NavigationCancel) {
        // console.log('NavigationCancel');
      }
      // NavigationError
      if(event instanceof NavigationError) {
        // console.log('NavigationError');
      }
      // RoutesRecognized
      if(event instanceof RoutesRecognized) {
        // console.log('RoutesRecognized');
      }
      // RouteConfigLoadStart
      if(event instanceof RouteConfigLoadStart) {
        // console.log('RouteConfigLoadStart');
      }
      // RouteConfigLoadEnd
      if(event instanceof RouteConfigLoadEnd) {
        // console.log('RouteConfigLoadEnd');
      }
    });

  }

  ngOnInit() {
  }
}
