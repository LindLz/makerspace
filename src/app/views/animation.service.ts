import { Injectable, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  animateCard(card: HTMLElement) {
    gsap.set(card, { perspective: 1000 });
    const q = gsap.utils.selector(card);
    const front = q(".cardFront");
    const back = q(".cardBack");

    gsap.set(back, { rotationY: -180 });

    const tl = gsap.timeline({ paused: true })
      .to(front, { duration: 1, rotationY: 180 })
      .to(back, { duration: 1, rotationY: 0 }, 0.1)
      .to(card, { z: 50 }, 0)
      .to(card, { z: 0 }, 0.5);

    card.addEventListener("mouseenter", () => {
      tl.play();
    });

    card.addEventListener("mouseleave", () => {
      if (tl.progress() > 0 && !tl.reversed()) {
        tl.reverse();
      }
    });

    card.addEventListener("touchstart", () => {
      tl.play();
    });

    card.addEventListener("touchend", () => {
      if (tl.progress() > 0 && !tl.reversed()) {
        tl.reverse();
      }
    });
  }

  animateElements() {
    gsap.registerPlugin(ScrollTrigger);
    

    // Animation for .animated-left in the first container
    const tlLeft1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.animated-left',
        start: '-50% center',
        end: '30% center',
        once: true,
        scrub: true,
       // markers: true,
        toggleActions: 'play reverse play reverse',
      }
    });

    tlLeft1.from('.animated-left img', {
      x: -150,
      duration: 0.5
    });

    // Animation for .animated-right in the first container
    const tlRight1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.animated-right',
        start: '-50% center',
        end: '30% center',
        once: true,
        scrub: true,
      //  markers: true,
        toggleActions: 'play reverse play reverse',
      }
    });

    tlRight1.from('.animated-right', {
      x: 150,
      duration: 0.5
    });

    // Animation for .second-animated-left in the second container
    const tlLeft2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.second-animated-left',
        start: '-50% center',
        end: '30% center',
        once: true,
        scrub: true,
      //  markers: true,
        toggleActions: 'play reverse play reverse',
      }
    });

    tlLeft2.from('.second-animated-left', {
      x: -150,
      duration: 0.5
    });

    // Animation for .second-animated-right in the second container
    const tlRight2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.second-animated-right',
        start: '-50% center',
        end: '30% center',
        once: true,
        scrub: true,
       // markers: true,
        toggleActions: 'play reverse play reverse',
      }
    });

    tlRight2.from('.second-animated-right img', {
      x: 150,
      duration: 0.5
    });

    // THe other homepage animations here
    this.animateWork('.text');
    this.animateWorkHeader('.text h1', 0.5);
    this.animateWorkParagraph('.text p', 1);
    this.animateContainerImage('.container img');
  }

  animateWork(selector: string) {
    gsap.from(selector, { duration: 1, opacity: 0, y: -50, ease: 'power2.out' });
  }

  animateWorkHeader(selector: string, delay: number) {
    gsap.from(selector, { duration: 1, opacity: 0, y: -50, ease: 'power2.out', delay });
  }

  animateWorkParagraph(selector: string, delay: number) {
    gsap.from(selector, { duration: 1, opacity: 0, y: -50, ease: 'power2.out', delay });
  }

  animateContainerImage(selector: string) {
    gsap.from(selector, { duration: 1, opacity: 0, y: -50, ease: 'power2.out' });
  }

  animateNumber(element: HTMLElement, startNumber: number, targetNumber: number): void {
    const duration = 2; 
    const fps = 60; 
    const interval = 1000 / fps;
    const steps = duration * fps; 
    const stepValue = (targetNumber - startNumber) / steps; 

    let currentValue = startNumber;
    let stepCount = 0;

    const animation = setInterval(() => {
      if (currentValue < targetNumber) {
        currentValue += stepValue;
        element.textContent = Math.round(currentValue).toString();
      } else {
        clearInterval(animation);
      }
      stepCount++;
      if (stepCount >= steps) {
        clearInterval(animation);
      }
    }, interval);
  }
}
