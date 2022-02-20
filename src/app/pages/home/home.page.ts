import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  fancyCards: any[] = [

    {
      title: 'Overview',
      icon: 'analytics-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      url: '/overview',
      large: false
    },
    {
      title: 'Software development',
      icon: 'layers-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      url: '/software_development',
      large: true
    },
    {
      title: 'Algorithms and data structures',
      icon: 'color-filter-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      url: '/algorithms',
      large: true
    },
    {
      title: 'About us',
      icon: 'accessibility-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      url: '/about_us',
      large: false
    },

  ]

  constructor() {}

}
