import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'makerspace';
  showLoader: boolean = true; 
  
  ngOnInit(): void {
    setTimeout(() => {
      this.hideLoader();
    }, 3000); 
  }

  hideLoader(): void {
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progressBar');
    const fixedPicture = document.querySelector('.fixed-picture');

    gsap.to(progressBar, {
      width: '100%',
      duration: 3, 
      ease: 'power4.out',
      onComplete: () => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            gsap.to(fixedPicture, {
              y: '-100%', 
              opacity:0,
              duration: 0.5,
              onComplete: () => {
                this.showLoader = false;
              }
            });
          }
        });
      }
    });
  }

  ngAfterViewInit() {
  }


}
