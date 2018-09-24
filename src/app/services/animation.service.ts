import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  animateIn(id: string, animationClass: string) {
    $(id).removeClass('invisible');
    $(id).addClass(animationClass);
  }

}
