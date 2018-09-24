import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AnimationService} from '../services/animation.service';
declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {

  constructor(public as: AnimationService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }

  ngAfterViewInit() {
    this.as.animateIn('#shop-header', 'flipInX');
    setTimeout(() => {
      this.as.animateIn('#build-web-dev-p', 'fadeInUp');
    }, 250);
    setTimeout(() => {
      this.as.animateIn('#collapsible-for-choosing', 'fadeInUp');
      this.as.animateIn('#blockquote-with-collapsible', 'fadeInUp');
      this.as.animateIn('#go-to-cart-btn', 'fadeInUp');
    }, 250);
  }
}
