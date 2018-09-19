import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  imagePath = 'assets/images/';

  projectData = {
      'resume': {
        'name': 'Portfolio',
        'linkToSite': 'https://michaelguy.herokuapp.com/',
        'imageUrl': this.imagePath + 'resume-site.png',
        'details': 'fill in later'
      },
      'old-resume': {
        'name': 'Old Portfolio',
        'linkToSite': 'https://michael-harrison.herokuapp.com/#/about-me',
        'imageUrl': this.imagePath + 'old-resume-site.png',
        'details': 'fill in later'
      },
      'open-when': {
        'name': '"Open When"',
        'linkToSite': 'https://open-whenn.herokuapp.com/#/login',
        'imageUrl': this.imagePath + 'open-when-site.png',
        'details': 'fill in later'
      },
      'to-lisa': {
        'name': 'In Law Gift',
        'linkToSite': 'https://tolisa.herokuapp.com/',
        'imageUrl': this.imagePath + 'to-lisa-site.png',
        'details': 'fill in later'
      },
      'sig-int': {
        'name': 'Interactions',
        'linkToSite': 'https://significant-interactions.herokuapp.com/#/sig-int',
        'imageUrl': this.imagePath + 'sig-int-site.png',
        'details': 'fill in later'
      },
      'diary': {
        'name': 'Diary',
        'linkToSite': '',
        'imageUrl': this.imagePath + 'diary-site.png',
        'details': 'fill in later'
      },
      'michalle': {
        'name': 'HomePage',
        'linkToSite': 'https://michalle.herokuapp.com/',
        'imageUrl': this.imagePath + 'michalle-site.png',
        'details': 'fill in later'
      },
      'rails-homepage': {
        'name': 'Homepage',
        'linkToSite': 'https://home4dawgs.herokuapp.com/',
        'imageUrl': this.imagePath + 'rails-homepage-site.png',
        'details': 'fill in later'
      },
      'why-do-that': {
        'name': 'Why Do That?',
        'linkToSite': 'https://whydothat.herokuapp.com/',
        'imageUrl': this.imagePath + 'why-do-that-site.png',
        'details': 'fill in later'
      }
    };

  constructor() { }

  projects() {
    return Object.keys(this.projectData);
  }
}
