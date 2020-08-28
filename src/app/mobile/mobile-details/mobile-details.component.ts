import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

import { MobileService } from 'src/app/shared/mobile.service';
import { MobileModel } from 'src/app/shared/mobile.model';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit {

  id: number;
  mobile: MobileModel;
  mobile_subs : Subscription;
  constructor(private mobileService : MobileService,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.mobile_subs = this.route.params
    .subscribe(
     (params : Params) => {
      this.id = +params['id'];
      this.mobile = this.mobileService.getmobile(this.id);
     }
    )
    console.log(this.mobile);

    }

  }
