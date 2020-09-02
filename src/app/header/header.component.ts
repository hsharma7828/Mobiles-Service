import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '../shared/mobile.service';
import { MobileModel } from '../shared/mobile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
@Output() cartItem = new EventEmitter<MobileModel[]>()

  cart:MobileModel[];
  isEmpty = true;
 cartlenght : number;

  constructor(private route : ActivatedRoute,
    private mobileService : MobileService) { }

    ngOnInit() {
    }

  onChecked() {
    this.isEmpty = false;
    this.cart = this.mobileService.getcartitems();
    this.cartItem.emit(this.cart);
    this.cartlenght = this.cart.length;
    }


}
