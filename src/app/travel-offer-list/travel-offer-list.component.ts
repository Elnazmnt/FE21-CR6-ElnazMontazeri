import { Component, OnInit } from '@angular/core';
import {travelOffer} from '../travelOffer'

@Component({
  selector: 'app-travel-offer-list',
  templateUrl: './travel-offer-list.component.html',
  styleUrls: ['./travel-offer-list.component.css']
})
export class TravelOfferListComponent implements OnInit {
travelOffer=travelOffer;
  constructor() { }

  ngOnInit(): void {
  }

}
