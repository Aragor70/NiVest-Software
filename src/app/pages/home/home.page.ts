import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  iconsDashboard: any[] = [
    {
      icon: "logo-angular",
      text: "Angular",
      background: "",
      style: {}
    },
    {
      icon: "logo-react",
      text: "React",
      background: "",
      style: {}
    },
    {
      icon: "/assets/icon/django.png",
      text: "Django",
      background: "",
      style: {}
    },
    {
      icon: "/assets/icon/nodejs.png",
      text: "NodeJS",
      background: "",
      style: {}
    }
  ]

  fancyCards: any[] = [

    {
      title: 'Overview',
      sub_title: 'Welcome to the NiVest Software',
      icon: 'analytics-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '/assets/pexels-henry.jpg',
      url: '/overview',
      large: false
    },
    {
      title: 'Software development',
      sub_title: 'Explore our software development solutions',
      icon: 'layers-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '/assets/IMAG0527.jpg',
      url: '/software_development',
      large: true
    },
    {
      title: 'NiVest for Education',
      sub_title: 'Take advantage of the NiVest Software resources',
      icon: 'color-filter-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '/assets/pexels-chair.jpg',
      url: '/algorithms',
      large: true
    },
    {
      title: 'Insider',
      sub_title: "Partner up. Create what's next.",
      icon: 'accessibility-outline',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '/assets/IMG-20200205-WA0000.jpg',
      url: '/about_us',
      large: false
    },

  ]

  constructor() {}

}
