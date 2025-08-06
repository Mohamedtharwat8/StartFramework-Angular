import { Component } from '@angular/core';
import { Star } from "../star/star";

@Component({
  selector: 'app-portfolio',
  imports: [Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

  portfolioSrc: string[] = [
    '/images/poert1.png',
    '/images/port3.png',
    '/images/port2.png',
    '/images/poert1.png',
    '/images/port3.png',
    '/images/port2.png',];
  flag: boolean = true;
  modelImg: string = '';

  hideModel(element: EventTarget | null, img: HTMLImageElement): void {
    if (element === img) return;
    this.flag = true;
  }
}
