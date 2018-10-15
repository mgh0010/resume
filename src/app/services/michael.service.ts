import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MichaelService {
  skillsData = {
    'angular': {'name': 'Angular', 'id': 'angular'},
    'ngrx': {'name': 'NgRx', 'id': 'ngrx'},
    'rxjs': {'name': 'RxJs', 'id': 'rxjs'},
    'javascript': {'name': 'Javascript', 'id': 'javascript'},
    'css': {'name': 'CSS', 'id': 'css'},
    'html': {'name': 'HTML', 'id': 'html'},
    'jquery': {'name': 'Jquery', 'id': 'html'},
    'ux-friendly-design': {'name': 'UX Friendly Design', 'id': 'ux-friendly-design'},
    'vue-js': {'name': 'Vue Js', 'id': 'vue-js'},
    'material-design': {'name': 'Material Design', 'id': 'material-design'},
    'bootstrap': {'name': 'Bootstrap', 'id': 'bootstrap'},
    'materialize': {'name': 'Materialize', 'id': 'materialize'},
    'firebase-db': {'name': 'Firebase Db', 'id': 'firebase-db'},
    'c': {'name': 'C', 'id': 'c'}, 'c-plus-plus': {'name': 'C++', 'id': 'c-plus-plus'},
    'java': {'name': 'Java', 'id': 'java'}
  };
  attributesData = ['Joyful', 'Hardworking', 'A persistent NEED to learn', 'Detail Oriented with Design',
                      'Guided by a good balance of Realism and Imagination'];

  constructor() { }

  attributes() {
    return this.attributesData;
  }

  skillIds() {
    return Object.keys(this.skillsData);
  }

  skillNames() {
    let skillNameList = [];
    for (const skill of this.skillIds()) {
      skillNameList += this.skillsData[skill]['name'];
    }
    return skillNameList;
  }

  getSkillName(skill: string) {
    return this.skillsData[skill]['name'];
  }
}
