import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class quotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'write your quote', 4, 0),
    new Quote(2, 'write your quote', 0, 0),
    new Quote(3, 'write your quote', 0, 0),
  ]
  arr: number[] = this.quotes.map(quote=>quote.upvotes)
  highest =Math.max(...this.arr)
  constructor() {}

  ngOnInit(): void {}
}
