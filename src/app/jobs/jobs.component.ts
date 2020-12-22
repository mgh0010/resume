import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AnimationService } from '../services/animation.service';
import { jobs } from './jobs';

declare var $: any;

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, AfterViewInit {
  time = 0;
  jobs = jobs;

  constructor(public as: AnimationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.as.animateIn('#exp-header', 'fadeInUp');
    }, this.time);
  }

  ngAfterViewInit() {
    this.animateInJobs();
  }

  animateInJobs() {
    this.time += 250;
    let job;
    for (let index = 0; index < this.getJobs().length; ++index) {
      setTimeout(() => {
        job = '#job' + index;
        this.as.animateIn(job, 'fadeInUp');
      }, this.time);
      this.time += 250;
    }
  }

  getJobs() {
    return Object.keys(this.jobs);
  }

}
