import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'makerspace';
  showLoader: boolean = true; // Initially show the loader

  ngOnInit(): void {
    // Simulate content loading time
    setTimeout(() => {
      // Hide the loader and show the content
      this.hideLoader();
    }, 3000); // Change this value to simulate different loading times
  }

  hideLoader(): void {
    // Get reference to loader and progress bar
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progressBar');
    const fixedPicture = document.querySelector('.fixed-picture');

    // Animation for progress bar width
    gsap.to(progressBar, {
      width: '100%',
      duration: 3, // Adjust duration as needed
      ease: 'power4.out',
      onComplete: () => {
        // Animation to fade out and remove the loader
        gsap.to(loader, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            // Animation to move the fixed picture off the screen
            gsap.to(fixedPicture, {
              y: '-100%', // Move the picture upward off the screen
              opacity:0,
              duration: 0.5,
              onComplete: () => {
                // Hide the loader and show the content
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
