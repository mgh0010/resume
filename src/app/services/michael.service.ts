import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MichaelService {
  skills = ['Angular', 'RxJs', 'Javascript', 'CSS', 'HTML', 'Jquery',
            'UX Friendly Design', 'Vue.js', 'Material Design',
            'Bootstrap', 'Materialize', 'Firebase db', 'C', 'C++', 'Java'];
  characteristics = ['Joyful', 'Hardworking', 'A persistent NEED to learn', 'Detail Oriented with Design',
                      'Guided by a good balance of Realism and Imagination'];

  constructor() { }
}
