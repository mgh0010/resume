import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.tooltipped').tooltip();
    });
  }

  ngOnDestroy() {
    $('.tooltipped').close();
  }

}
