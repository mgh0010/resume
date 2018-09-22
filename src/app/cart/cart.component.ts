import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( public cs: CartService) { }

  ngOnInit() {
    setTimeout(() => {
      $('#cart-header').removeClass('invisible');
      $('#cart-header').addClass('fadeInUp');
    });
  }

}
