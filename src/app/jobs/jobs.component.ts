import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AnimationService } from '../services/animation.service';

declare var $: any;

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, AfterViewInit {
  time = 0;
  jobs = {
    'Crossvale': {
      'title': 'Associate Developer',
      'company': 'Crossvale',
      'location': 'Office: Birmingham, AL | HQ: Dallas, TX',
      'time': 'October 2018 - Present',
      'description': `Engineer, develop, and design BBVA Compass Bank front-end software currently in angularJS (soon to be Polymer). 
                      This application allows in branch employees to perform bank related matters on the web.`,
      'icon': 'code'
    },
    'together': {
      'title': 'Lead Web Developer',
      'company': 'Together',
      'location': 'Remote',
      'time': 'October 2019 - Jan 2020',
      'description': `Add to and maintain a Web Administration Portal for Churches to manage their congregation. 
                      Built with Vue 3 and Vuex. Push notifications handled with firebase`,
      'icon': 'code'
    },
    'selex': {
      'title': 'Software Engineer',
      'company': 'Selex Galileo Inc',
      'location': 'Huntsville, AL',
      'time': 'August 2018 - October 2018',
      'description': 'Build and maintain C++ Electronic Warfare Avionic Systems with Rhapsody and Visual Studio.',
      'icon': 'airplanemode_active'
    },
    'saturn': {
      'title': 'Angular Software Developer',
      'company': 'Saturn Ergonomics',
      'location': 'Auburn, AL',
      'time': 'May 2018 - Aug 2018',
      'description': `Research, Design, and development a web-based suite of calculators for the ergonomic industry.
        The web application consists of an Angular 6 front-end with flask server back-end in python with MySQL
        database.`,
      'icon': 'code'
    },
    'adtran1': {
      'title': 'User Experience Co-op',
      'company': 'ADTRAN',
      'location': 'Huntsville, AL',
      'time': 'May 2016 - Aug 2016',
      'description': `Design User interfaces per User Experience guidelines for several widgets in
        ADTRAN's MOSAIC framework. Design these widgets by means of heavy research, user testing,
        gathering feedback, drawing mockups, presenting mockups, and refining designs to best meet user needs.`,
      'icon': 'widgets'
    },
    'adtran2': {
      'title': 'System Software Team Co-op',
      'company': 'ADTRAN',
      'location': 'Huntsville, AL',
      'time': 'Aug 2015 - Dec 2015',
      'description': `Optimize current data structure algorithms in C++ and C using STL containers.
        Construct more efficient data structure for OS timer handling and implement into the existing
        kernel code. Write many tests for own code with gtest framework.`,
      'icon': 'sd_card'
    },
    'adtran3': {
      'title': 'Systems Design and Verification Test Co-op',
      'company': 'ADTRAN',
      'location': 'Huntsville, AL',
      'time': 'Jan 2015 - May 2015',
      'description': `Work closely with a Triple Play Testbed. Upgrade the network, configure new services
        and write python scripts and python app to speed up redundant interaction with testbed and other
        telnet accessible lab equipment.`,
      'icon': 'build'
    }
  };

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
