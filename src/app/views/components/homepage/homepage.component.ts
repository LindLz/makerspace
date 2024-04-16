import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit, OnInit {
  @ViewChildren('number1, number2, number3') numberElements!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.animateElements();
  }

  animateElements(): void {
    gsap.from('.work', { duration: 1, opacity: 0, y: -50, ease: 'power2.out' });
    gsap.from('.work h1', { duration: 1, opacity: 0, y: -50, ease: 'power2.out', delay: 0.5 });
    gsap.from('.work p', { duration: 1, opacity: 0, y: -50, ease: 'power2.out', delay: 1 });
    gsap.from('.container img', { duration: 1, opacity: 0, y: -50, ease: 'power2.out' });
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numberElement = entry.target as HTMLElement;
          const targetNumber = parseInt(numberElement.textContent || '0', 10);
          this.animateNumber(numberElement, 0, targetNumber);
          observer.unobserve(numberElement);
        }
      });
    }, options);

    this.numberElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }

  animateNumber(element: HTMLElement, startNumber: number, targetNumber: number): void {
    const duration = 2; // duration in seconds
    const fps = 60; // frames per second
    const interval = 1000 / fps; // interval in milliseconds
    const steps = duration * fps; // total steps for the animation
    const stepValue = (targetNumber - startNumber) / steps; // value increment per step

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
