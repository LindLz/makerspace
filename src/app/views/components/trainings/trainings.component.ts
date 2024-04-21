import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit, AfterViewInit {
 
  constructor(private elementRef: ElementRef, private animationService: AnimationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.animationService.animateElements();
    const cards = this.elementRef.nativeElement.querySelectorAll('.cardCont');
    cards.forEach((card: HTMLElement) => {
      this.animationService.animateCard(card);
    });
  }

}
