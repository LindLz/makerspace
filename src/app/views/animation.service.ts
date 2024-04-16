import { Injectable, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() { }

  animateLogo() {
    gsap.from('.navbar-brand img', { opacity: 0, y: -50, duration: 2, delay: 0 });
  }

  animateLinksIn(linkBox: ElementRef) {
    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    const links = linkBox.nativeElement.querySelectorAll('.nav-link');
    timeline.from(links, { autoAlpha: 0, y: 20, duration: 0.5, stagger: 0.1 }, "+=0.2");
  }

  animateLinksOut(linkBox: ElementRef) {
    if (window.innerWidth < 992) {
      const links = linkBox.nativeElement.querySelectorAll('.nav-link');
      gsap.to(links, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
      });
    }
  }
  
  animateNavbarOpen(togglerIcon: ElementRef) {
    gsap.to(togglerIcon.nativeElement, { rotation: 90, duration: 0.5 });
  }
  
  animateNavbarClose(togglerIcon: ElementRef) {
    gsap.to(togglerIcon.nativeElement, { rotation: 0, duration: 0.5 });
  }
}
