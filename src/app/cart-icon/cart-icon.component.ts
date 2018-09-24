import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit, OnDestroy {

  constructor(public cs: CartService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.tooltipped').tooltip();
    });
  }

  ngOnDestroy() {
    $('.tooltipped').close();
  }

}
