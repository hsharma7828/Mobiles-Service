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

  constructor(private mobileService : MobileService) { }

  ngOnInit() {}

  grandtotal() {
  let grandtotal_value = 0;
   let price = 0;
   if (this.mobileService.cartItem) {

      this.mobileService.cartItem.forEach(ele => {
        price = price +  +ele.price
      })
      return price;
    } else{
      return 0;
    }
  }
}
