import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SharedService } from "../../shared/services/shared.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [
        trigger('toggleHeight', [
            state('inactive', style({
                height: '0',
                opacity: '0'
            })),
            state('active', style({
                height: '*',
                opacity: '1'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})
export class NavigationComponent implements OnInit {
  sidebarVisible: boolean;
  activatedNav: string;

  // Sub menu visibilities
  navigationSubState:any = {
    Tables: 'inactive',
    Forms: 'inactive',
    UserInterface: 'inactive',
    Components: 'inactive',
    Charts: 'inactive',
    SamplePages: 'inactive',
  };

  initActiveNavigation(path) {
    switch(path) {
      case 'home':
        this.activatedNav = 'Home';
        break;
      case 'typography':
        this.activatedNav = 'Typography';
        break;
      case 'widgets':
        this.activatedNav = 'Widgets';
        break;
      case 'table':
        this.activatedNav = 'Tables';
        this.navigationSubState.Tables = 'active';
        break;
      case 'form':
        this.activatedNav = 'Forms';
        this.navigationSubState.Forms = 'active';
        break;
      case 'user-interface':
        this.activatedNav = 'UserInterface';
        this.navigationSubState.UserInterface = 'active';
        break;
      case 'components':
        this.activatedNav = 'Components';
        this.navigationSubState.Components = 'active';
        break;
      case 'charts':
        this.activatedNav = 'Charts';
        this.navigationSubState.Charts = 'active';
        break;
      case 'calendar':
        this.activatedNav = 'Calendar';
        break;
      case 'sample-pages':
        this.activatedNav = 'SamplePages';
        this.navigationSubState.SamplePages = 'active';
        break;
    }
  }

  // Toggle sub menu
  toggleNavigationSub(menu: string, event) {
    event.preventDefault();

    let parentIsActive:boolean = event.currentTarget.parentElement.className.split(' ').includes('active');
    this.activatedNav = (this.activatedNav !== menu || parentIsActive) ? menu : '';

    for (var key of Object.keys(this.navigationSubState)) {
      if (key !== menu && this.navigationSubState[key] === 'active') {
        this.navigationSubState[key] = 'inactive';
      }
    }

    this.navigationSubState[menu] = (this.navigationSubState[menu] === 'inactive' ? 'active' : 'inactive');
  }

  constructor(private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
    sharedService.sidebarVisibilitySubject.subscribe((value) => {
      this.sidebarVisible = value
    })

    let path = activatedRoute.firstChild.url['value'][0].path;
    this.initActiveNavigation(path);
  }

  ngOnInit() {
  }

}
