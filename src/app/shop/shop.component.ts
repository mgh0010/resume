import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }

  ngAfterViewInit() {
    $('#shop-header').removeClass('invisible');
    $('#shop-header').addClass('flipInX');
    setTimeout(() => {
      $('#build-web-dev-p').removeClass('invisible');
      $('#build-web-dev-p').addClass('fadeInUp');
    }, 500);
    setTimeout(() => {
      $('#collapsible-for-choosing').removeClass('invisible');
      $('#collapsible-for-choosing').addClass('fadeInUp');
      $('#blockquote-with-collapsible').removeClass('invisible');
      $('#blockquote-with-collapsible').addClass('fadeInUp');
    }, 500);
  }
}
