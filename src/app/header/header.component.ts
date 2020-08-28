import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '../shared/mobile.service';
import { MobileModel } from '../shared/mobile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  cart:MobileModel[];
  isEmpty = true;
  grandtotal_value:number;
  price:number = 0;

  constructor(private route : ActivatedRoute,
    private mobileService : MobileService) { }

    ngOnInit() {
    }

  onChecked() {
    this.isEmpty = false;
    this.cart = this.mobileService.getcartitems();
    }

  grandtotal() {
    this.grandtotal_value = 0;
    this.price = 0;
   if (this.cart) {
      this.grandtotal_value = this.cart.length;
      this.cart.forEach(ele => {
        this.price = this.price +  +ele.price
      })
      return this.price;
    } else{
      return 0;
    }
  }
}
