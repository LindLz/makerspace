import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from './animation.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements AfterViewInit, OnInit {
  title = 'makerspace';

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    this.animationService.animateLinksIn(this.linkBox);
  //  this.animationService.animateLogo();
  }

  ngAfterViewInit() {

  }

  isNavbarOpen = false;
  @ViewChild('linkBox') linkBox!: ElementRef;
  @ViewChild('togglerIcon') togglerIcon!: ElementRef; 

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    if (this.isNavbarOpen) {
      if (window.innerWidth < 992) { 
        this.animationService.animateLinksIn(this.linkBox);
      }
      this.animationService.animateNavbarOpen(this.togglerIcon); 
    } else {
      this.animationService.animateNavbarClose(this.togglerIcon); 
    }
  }

  closeNavbar() {
    if (this.isNavbarOpen) { 
      this.isNavbarOpen = false;
      this.animationService.animateNavbarClose(this.togglerIcon);
    }
  }
}
