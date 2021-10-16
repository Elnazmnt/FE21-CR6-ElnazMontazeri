import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelOfferListComponent } from './travel-offer-list/travel-offer-list.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
  {
    path:"",component: TravelOfferListComponent
  },
  {
    path: 'travelOffer/:travelId',component: TravelDetailsComponent
  },{
    path: 'cart', component: CartComponent
  },{
    path: 'blog',component: BlogComponent
  },{
    path: 'travel-offer-list', component:TravelOfferListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
