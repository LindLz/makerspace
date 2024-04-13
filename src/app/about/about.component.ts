import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  helpImageUrl = 'assets/Help.png';
  otherImageUrls = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
  ];

  imagePairs = this.otherImageUrls.map(url => [this.helpImageUrl, url]);

  constructor() { }

  ngOnInit(): void {
  }
}


