import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'makerspace';

  ngAfterViewInit() {
    gsap.from('.box', { duration: 1, opacity: 0, y: 50 });
    this.animateLinksIn();
  }

  isNavbarOpen = false;
  @ViewChild('linkBox') linkBox!: ElementRef;
  @ViewChild('togglerIcon') togglerIcon!: ElementRef; 

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    if (this.isNavbarOpen) {
      if (window.innerWidth < 992) { 
        this.animateLinksIn();
      }
      this.animateNavbarOpen(); 
    } else {
      this.animateNavbarClose(); 
    }
  }

  closeNavbar() {
    if (this.isNavbarOpen) { 
      this.isNavbarOpen = false;
      this.animateNavbarClose();
    }
  }

  animateLinksIn() {
    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
    const links = this.linkBox.nativeElement.querySelectorAll('.nav-link');
    timeline.from(links, { autoAlpha: 0, y: 20, duration: 0.5, stagger: 0.1 }, "+=0.2");
  }

  animateLinksOut() {
    console.log("Animating links out");
    if (window.innerWidth < 992) {
      const links = this.linkBox.nativeElement.querySelectorAll('.nav-link');
      gsap.to(links, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
      });
    }
  }
  
  
  animateNavbarOpen() {
    gsap.to(this.togglerIcon.nativeElement, { rotation: 90, duration: 0.5 });
  }
  
  animateNavbarClose() {
    gsap.to(this.togglerIcon.nativeElement, { rotation: 0, duration: 0.5 });
  }
}
