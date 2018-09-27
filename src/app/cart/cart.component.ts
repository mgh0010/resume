import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { AnimationService } from '../services/animation.service';

declare var $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements AfterViewInit {
  time = 0;

  constructor( public cs: CartService,
               public as: AnimationService) { }

  ngAfterViewInit() {
    const myHeader = document.getElementById('side-nav-header');
    myHeader.scrollTop = 0;
    setTimeout(() => {
      this.as.animateIn('#cart-header', 'fadeInUp');
    }, this.time);
    this.time += 250;
    this.animateInCartItems();
    this.animateInCheckoutBtn();
  }

  animateInCartItems() {
    // animate in skill header
    setTimeout(() => {
      this.as.animateIn('#chosen-skill-header', 'flipInX');
    }, this.time);

    let cartItem;
    // animate in Skills
    for (let index = 0; index < this.cs.chosenSkills.length; ++index) {
      setTimeout(() => {
        cartItem = $('#skill' + index);
        this.as.animateIn(cartItem, 'flipInX');
      }, this.time);
      this.time += 250;
    }
    // animate in attribute header
    setTimeout(() => {
      this.as.animateIn('#chosen-attr-header', 'flipInX');
    }, this.time);
    // animate in Attributes
    for (let index = 0; index < this.cs.chosenAttributes.length; ++index) {
      setTimeout(() => {
        cartItem = $('#attr' + index);
        this.as.animateIn(cartItem, 'flipInX');
      }, this.time);
      this.time += 250;
    }
  }

  private animateInCheckoutBtn() {
    setTimeout(() => {
      this.as.animateIn('#go-to-checkout-btn', 'fadeIn');
    }, this.time);
  }
}
