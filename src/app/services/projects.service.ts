import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  imagePath = 'assets/images/';

  projectData = {
    'copycodes': {
      'name': 'CopyCodes',
      'linkToSite': 'https://copycodes.io',
      'imageUrl': this.imagePath + 'copycodes.png',
      'details': 'Ionic / Angular 11 Progressive web app with a Google Cloud Platform backend in nodejs and stripe/twilio for payments/texts. I act as the sole developer and technical liaison.'
    },
    'project-samson': {
      'name': 'Project Samson',
      'linkToSite': 'https://projectsamson.herokuapp.com/sign-in/',
      'imageUrl': this.imagePath + 'project-samson.png',
      'details': 'Angular 8 Progressive web app with firebase: the most extensive and customizable workout app ever created. Still in progress.'
    },
      'resume': {
        'name': 'Portfolio',
        'linkToSite': 'https://michaelguy.herokuapp.com/',
        'imageUrl': this.imagePath + 'resume-site.png',
        'details': 'Angular 6 app for promoting my work, skillset, and experience. Still in progress.'
      },
      'sig-int': {
        'name': 'Interactions',
        'linkToSite': 'https://significant-interactions.herokuapp.com/#/sig-int',
        'imageUrl': this.imagePath + 'sig-int-site.png',
        'details': 'A Vue.js app with a Firebase database. This app was made for my team to log significant interactions ' +
          'with college students and then use that data to calculate important outreach metrics.'
      },
      'old-resume': {
        'name': 'Old Portfolio',
        'linkToSite': 'https://michael-harrison.herokuapp.com/#/about-me',
        'imageUrl': this.imagePath + 'old-resume-site.png',
        'details': 'An older, out-of-date Angular app acting as my resume.'
      },
      'rails-homepage': {
        'name': 'Homepage',
        'linkToSite': 'https://home4dawgs.herokuapp.com/',
        'imageUrl': this.imagePath + 'rails-homepage-site.png',
        'details': 'A Ruby on Rails app used as a playground for me to mess with the framework. I actually display a ' +
          'weather report(weekly and daily) by darksky.api, but you can only see it if you enable CORS by an addon ' +
          'through a browser plugin'
      },
      'diary': {
        'name': 'Diary',
        'linkToSite': '',
        'imageUrl': this.imagePath + 'diary-site.png',
        'details': 'An Angular app with the intention of being a useful quick diary entry input form. Still in Progress'
      },
      'why-do-that': {
        'name': 'Why Do That?',
        'linkToSite': 'https://whydothat.herokuapp.com/',
        'imageUrl': this.imagePath + 'why-do-that-site.png',
        'details': 'An Angular app used to explore page links. It\'s goal is to tell people why I do some of the things ' +
          'I do. '
      },
      'michalle': {
        'name': 'HomePage',
        'linkToSite': 'https://michalle.herokuapp.com/',
        'imageUrl': this.imagePath + 'michalle-site.png',
        'details': 'An Angular app messing around with drawing an SVG image and used by my wife and me for ' +
          'frequently used links.'
      },
      'to-lisa': {
        'name': 'In Law Gift',
        'linkToSite': 'https://tolisa.herokuapp.com/',
        'imageUrl': this.imagePath + 'to-lisa-site.png',
        'details': 'An Angular app reading a poem to my mother in law about my wife, Alle.'
      },
      'open-when': {
        'name': '"Open When"',
        'linkToSite': 'https://open-whenn.herokuapp.com/#/login',
        'imageUrl': this.imagePath + 'open-when-site.png',
        'details': 'An Angular app I built for my wife as a wedding gift. The premise of it is that it holds letters ' +
          'for her to open when the time comes in life for her to read the respective letter. However, there is a sign ' +
          'in page blocking the way for easy reading!'
      }
    };

  constructor() { }

  projects() {
    return Object.keys(this.projectData);
  }
}
