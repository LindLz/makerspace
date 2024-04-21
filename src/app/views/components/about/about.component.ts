import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private animationService: AnimationService) { }

  ngOnInit(): void {
    this.animateText();
  }

  ngAfterViewInit(): void {
    this.animateImages();
    this.animationService.animateElements();
  }

  animateText(): void {
    const title = document.querySelector('.title');
    if (title) {
      const text = title.textContent;
      if (text) {
        title.innerHTML = '';
        text.split('').forEach(char => {
          const span = document.createElement('span');
          span.textContent = char;
          title.appendChild(span);
        });

        gsap.from(".title span", {
          opacity: 0,
          ease: "steps(1)",
          stagger: 0.2,
          duration: 2,
          delay: 1
        });
      }
    }
  }

  animateImages(): void {
    gsap.from(".col-md-4 img", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay: 1,
      repeat: -1, // Repeat indefinitely
      yoyo: true // Bounce effect
    });
  }
}