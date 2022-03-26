import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss'],
})
export class SoftwareDevelopmentComponent implements OnInit {

  
  fancyCards: any[] = [

    {
      title: 'Mobile App Development',
      sub_title: 'We are able to deliver a custom mobile app',
      icon: '',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '',
      url: '/overview',
      large: false
    },
    {
      title: 'Hybrid Applications',
      sub_title: 'We are able to deliver a custom mobile app',
      icon: '',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '',
      url: '/overview',
      large: true
    },
    {
      title: 'Design',
      sub_title: 'We are able to deliver a custom mobile app',
      icon: '',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '',
      url: '/overview',
      large: false
    },
    {
      title: 'Database systems',
      sub_title: 'We are able to deliver a custom mobile app',
      icon: '',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '',
      url: '/overview',
      large: false
    },
    {
      title: 'Artificial Intelligence',
      sub_title: 'We are able to deliver a custom mobile app',
      icon: '',
      imgs: [
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
        '/assets/fancy/logo.png',
      ],
      background: '',
      url: '/overview',
      large: false
    },
    

  ]

  constructor() { }

  ngOnInit() {}

}
