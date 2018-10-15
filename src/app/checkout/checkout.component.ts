import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements AfterViewInit {
  time = 0;

  constructor(public as: AnimationService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.as.animateIn('#man-for-job-txt', 'flipInX');
    }, this.time);
    this.time += 250;
    setTimeout(() => {
      this.as.animateIn('#me-img', 'fadeIn');
    }, this.time);

    this.loadInBtns();
    this.loadInLargeBtns();
  }

  private loadInBtns() {
    setTimeout(() => {
      this.as.animateIn('#work-history-btn', 'fadeInUp');
    }, this.time);
    setTimeout(() => {
      this.as.animateIn('#projects-btn', 'fadeInUp');
    }, this.time);
    setTimeout(() => {
      this.as.animateIn('#about-me-btn', 'fadeInUp');
    }, this.time);
  }

  private loadInLargeBtns() {
    setTimeout(() => {
      this.as.animateIn('#work-history-btn-large', 'fadeInUp');
    }, this.time);
    setTimeout(() => {
      this.as.animateIn('#projects-btn-large', 'fadeInUp');
    }, this.time);
    setTimeout(() => {
      this.as.animateIn('#about-me-btn-large', 'fadeInUp');
    }, this.time);
  }
}
