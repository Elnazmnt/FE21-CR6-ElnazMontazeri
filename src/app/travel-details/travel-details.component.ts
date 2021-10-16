import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { travelOffer } from '../travelOffer';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
travel: any;
  constructor(private route:ActivatedRoute , private  cartService: CartService) { }
  addToCart(travel : any) {

    window.alert('Your travel has been added to the cart!');

    this.cartService.addToCart(travel);

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(parms => {
      let Id :any = parms.get('travelId');
      this.travel=travelOffer[Id];
    });
  }

}
