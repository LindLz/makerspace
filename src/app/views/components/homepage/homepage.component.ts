import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
  @ViewChildren('number1, number2, number3') numberElements!: QueryList<ElementRef>;
  @ViewChildren('navbarLinks') navbarLinks!: ElementRef;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    this.animationService.animateElements();
    this.setupIntersectionObserver();

  }
  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numberElement = entry.target as HTMLElement;
          const targetNumber = parseInt(numberElement.textContent || '0', 10);
          this.animationService.animateNumber(numberElement, 0, targetNumber);
          observer.unobserve(numberElement);
        }
      });
    }, options);

    this.numberElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }
}
