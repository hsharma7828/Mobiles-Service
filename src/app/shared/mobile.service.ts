import { Injectable } from '@angular/core';
import { MobileModel } from './mobile.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileService {

mobileChangedList =new Subject<MobileModel[]> ();
cartItem = [];
cartItemChanged = new Subject<MobileModel[]>();


  constructor(private http: HttpClient) {}

  // private mobiles: MobileModel[] = [
  //   new MobileModel(
  //     'Xiaomi',
  //     'Note 8 Pro',
  //     'Cheap and Awesome',
  //     'https://www.reliancedigital.in/medias/Xiaomi-NOTE-8-PRO-Smart-Phones-491615271-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDI4NDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZjL2g3ZC85Mjg5NzczOTQwNzY2LmpwZ3xjMWEwZDlhYWY5YmRhOTgwYjUwNTYwNjJiMTkzN2FjNGQwMzA2NjU0ZDc0YmZkNDJkMzY3ZDcyMDc2MmZmODli',
  //     '16999'
  //   ),
  //   new MobileModel(
  //     'Samsung',
  //     'M 30',
  //     'Power Full and Gaming Specialist',
  //     'https://rukminim1.flixcart.com/image/416/416/kb1470w0/mobile/s/x/f/samsung-galaxy-m30s-sm-m307fzkdinss-original-imafsh7heuaqttfy.jpeg?q=70',
  //     '17600'
  //   ),
  // ];

  private mobiles : MobileModel[];

  setMobileData(mobilelist : MobileModel[]) {
    this.mobiles = mobilelist;
    this.mobileChangedList.next(this.mobiles.slice());
  }

  getmobiles() {
    console.log(this.mobiles);
    return this.mobiles ? this.mobiles.slice() : [];
  }

  getmobile(i: number) {
    return this.mobiles[i];
  }

  addcartitems (cartitem : MobileModel) {
    this.cartItem.push(cartitem);
    this.cartItemChanged.next(this.cartItem.slice());
   }

  getcartitems(){
    console.log(this.cartItem);
    return this.cartItem.slice();

  }

  storemobilesdata() {
    const mobilesdata = this.getmobiles();
    this.http
      .put('https://mobilestoreservice-5795d.firebaseio.com/mobileData.json', mobilesdata)
      .subscribe((response) => {
        console.log(response);
      });
  }

  getmobilesdata() {
    this.http
      .get<MobileModel[]>('https://mobilestoreservice-5795d.firebaseio.com/mobileData.json')
      .subscribe(
        (response) => {
          this.setMobileData(response);
        }
      );
  }
}
