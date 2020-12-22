import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MichaelService {
  skillsData = {
    'angular': {'name': 'Angular', 'id': 'angular'},
    'rxjs': {'name': 'RxJs', 'id': 'rxjs'},
    'react': {'name': 'React', 'id': 'react'},
    'pubsub': {'name': 'Pub/Sub', 'id': 'pubsub'},
    'vue-js': {'name': 'Vue Js', 'id': 'vue-js'},
    'vuex': {'name': 'Vuex', 'id': 'vuex'},
    'gcp': {'name': 'Google Cloud Platform', 'id': 'gcp'},
    'cross-platform-dev': {'name': 'Cross Platform Dev', 'id': 'cross-platform-dev'},
    'ionic-rn': {'name': 'Ionic/React Native', 'id': 'ionic-rn'},
    'firebase': {'name': 'Firebase', 'id': 'firebase'},
    'clean-code': {'name': 'Clean Code', 'id': 'clean-code'},
    'lit-html': {'name': 'lit-html', 'id': 'lit-html'},
    'lit-element': {'name': 'lit-element', 'id': 'lit-element'},
    'bs-in-software-eng': {'name': 'BS in Sofware Eng', 'id': 'bs-in-software-eng'},
    'algorithms': {'name': 'Algorithms', 'id': 'algorithms'},
    'software-design': {'name': 'Software Design', 'id': 'software-design'},
    'software-process': {'name': 'Software Process', 'id': 'software-process'},
    'javascript': {'name': 'Javascript', 'id': 'javascript'},
    'css': {'name': 'CSS', 'id': 'css'},
    'html': {'name': 'HTML', 'id': 'html'},
    'jquery': {'name': 'Jquery', 'id': 'html'},
    'ux-friendly-design': {'name': 'UX Friendly Design', 'id': 'ux-friendly-design'},
    'push-notifications': {'name': 'Push Notifications', 'id': 'push-notifications'},
    'bootstrap': {'name': 'Bootstrap', 'id': 'bootstrap'},
    'c': {'name': 'C', 'id': 'c'}, 'c-plus-plus': {'name': 'C++', 'id': 'c-plus-plus'},
    'java': {'name': 'Java', 'id': 'java'}
  };
  attributesData = [
    'Joyful',
    'Servant Leader',
    'Delivery Driven',
    'Hardworking',
    'A persistent NEED to learn',
    'Detail Oriented with Design',
    'Guided by a good balance of Realism and Imagination'
  ];

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
