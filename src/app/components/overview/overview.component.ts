import { Component, OnInit } from '@angular/core';
import { NivestService } from 'src/app/services/nivest/nivest.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  public users = [];

  constructor(private _nivestService: NivestService) {}

  ngOnInit() {

    this._nivestService.getUsers().subscribe((data: any) => this.users = data)
    
  }

}
