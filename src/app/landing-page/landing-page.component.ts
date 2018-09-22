import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#hi').removeClass('invisible');
    $('#hi').addClass('flipInX');

    setTimeout(() => {
      $('#find-help').removeClass('invisible');
      $('#find-help').addClass('flipInX');
    }, 1000);
    setTimeout(() => {
      $('#go-shop').removeClass('invisible');
      $('#go-shop').addClass('flipInX');
    }, 1500);
  }

}
