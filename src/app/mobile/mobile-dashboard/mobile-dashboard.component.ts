import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { MobileService } from 'src/app/shared/mobile.service';
import { MobileModel } from 'src/app/shared/mobile.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.css'],
})
export class MobileDashboardComponent implements OnInit, OnDestroy {
  index: number = null;
  mobiles: MobileModel[];
  price: number = 0;
  total_price: number = 0;
  selected_mobiles = [];
  subs: Subscription;
  choosed_mobile : MobileModel[];

  constructor(private mobileService: MobileService) {}

  ngOnInit() {
    this.subs = this.mobileService.mobileChangedList.subscribe(
      (response : MobileModel[]) => {
        this.mobiles = response;
        }
    );
  }

  onAddtoCart(i: number) {
    this.mobileService.addcartitems(this.mobiles[i]);
  }

  onSelected(i :number) {
   this.index = i + 1;
   console.log(this.index);
  }

  ngOnDestroy () {
    this.subs.unsubscribe();
  }
}
