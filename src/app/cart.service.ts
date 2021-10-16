import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: any =[];
  constructor() { }
  addToCart(travel:any){
this.items.push(travel);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
}
