import { Component } from '@angular/core';
import { Star } from '../star/star';

@Component({
  selector: 'app-home',
  imports: [Star],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  titleHome: string = 'Start Framework';
  homeColor: string = 'white'; // Example color, can be customized

}
