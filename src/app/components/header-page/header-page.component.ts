import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {

  @Input() elements: any[];
  constructor() { }

  
  ngOnInit() {}
  
  scroll(id: any) {
    console.log(`scrolling to ${id}`);
    let el = document.querySelector(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' },);

    
    //window.scrollTo(el.yPosition)
    //el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
