import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insider',
  templateUrl: './insider.component.html',
  styleUrls: ['./insider.component.scss'],
})
export class InsiderComponent implements OnInit {

    
  fancyCards: any[] = [

    {
      title: 'Registration',
      sub_title: 'Be a host of benefits, promotions, and events',
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
      title: 'Support',
      sub_title: 'Customized services tailored for you',
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
