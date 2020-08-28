import { Component, OnInit } from '@angular/core';
import { MobileService } from '../shared/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private mobileService : MobileService) { }

  ngOnInit() {
    this.mobileService.getmobilesdata();
  }

}
