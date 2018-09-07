import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.sidenav').sidenav();
    });
  }

}
