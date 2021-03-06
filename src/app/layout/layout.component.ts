import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})

export class LayoutComponent implements OnInit {
  isFullscreen: boolean;
  fullscreenPaths: string[] = ['logout', 'login', 'register', 'forgot-password'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // console.log(activatedRoute.firstChild.url['value'][0].path); // working
        // activatedRoute.firstChild.url.subscribe((url: UrlSegment[]) => console.log(url[0].path)); // working
        // console.log(activatedRoute.snapshot.firstChild.url[0].path); // working
        this.isFullscreen = this.fullscreenPaths.includes(activatedRoute.firstChild.url['value'][0].path) ? true : false;
      }
    });

  }

  ngOnInit() { }
}
