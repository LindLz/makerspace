import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit, AfterViewInit {
  helpImageUrl = 'assets/Help.png';
  otherImageUrls = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
  ];

  imagePairs = this.otherImageUrls.map(url => [this.helpImageUrl, url]);

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>(this.elementRef.nativeElement.querySelectorAll('.cardCont')).forEach((card: HTMLElement) => {
      gsap.set(card, {
        perspective: 1000 // Adjust perspective value
      });
      const q = gsap.utils.selector(card);
      const front = q(".cardFront");
      const back = q(".cardBack");

      gsap.set(back, { rotationY: -180 });

      const tl = gsap.timeline({ paused: true })
        .to(front, { duration: 1, rotationY: 180 }) // Shortened duration to 0.5 seconds
        .to(back, { duration: 1, rotationY: 0 }, 0.1) // Adjusted delay between front and back rotation
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
    });
  }
}
