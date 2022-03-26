import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insider',
  templateUrl: './insider.component.html',
  styleUrls: ['./insider.component.scss'],
})
export class InsiderComponent implements OnInit {

    
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
      large: false
    }

  ]

  constructor() { }

  ngOnInit() {}

}
