import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class quotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'We cannot solve problems with the kind of thinking we employed when we came up with them.',
      0,
      0,
      new Date(2021, 2, 14),
      'Peter',
      'Albert Einstein'
    ),
    new Quote(
      1,
      'We cannot solve problems with the kind of thinking we employed when we came up with them.',
      0,
      0,
      new Date(2022, 3, 11),
      'peter',
      'Albert Einstein'
    ),
  ];


  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.dateposted = new Date(quote.dateposted);
    this.quotes.push(quote);
  }
  removeQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete this Quote? ');

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  first!: number;
  last!: number;
  count!: number;

  highest() {
    this.first = 0;
    this.last = 0;

    for (this.count = 0; this.count < this.quotes.length; this.count++) {
      this.last = this.quotes[this.count].upvotes;
      if (this.last > this.first) {
        this.first = this.last;
      }
    }
    return this.first;
  }

  constructor() {}

  ngOnInit(): void {}
}
