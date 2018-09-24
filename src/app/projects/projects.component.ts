import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ProjectsService } from '../services/projects.service';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  time = 0;

  constructor(public ps: ProjectsService) { }

  ngOnInit() {
    setTimeout(() => {
      $('#projects-header').removeClass('invisible');
      $('#projects-header').addClass('fadeInUp');
    }, this.time);
  }

  ngAfterViewInit() {
    this.animateInProjects();
  }

  private animateInProjects() {
    this.time += 250;
    let job;
    for (let index = 0; index < this.ps.projects().length; ++index) {
      setTimeout(() => {
        job = $('#project' + index);
        job.removeClass('invisible');
        job.addClass('fadeInUp');
      }, this.time);
      this.time += 250;
    }
  }
}
