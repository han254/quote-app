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
      'By:Albert Einstein',
      'Peter'
    ),
    new Quote(
      1,
      'We cannot solve problems with the kind of thinking we employed when we came up with them.',
      0,
      0,
      new Date(2022, 3, 11),
      'By:Albert Einstein',
      "Peter"
    ),
  ];
  arr: number[] = this.quotes.map((quote) => quote.upvotes);
  highest = Math.max(...this.arr);

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength++;
    quote.dateposted = new Date(quote.dateposted);
    this.quotes.push(quote);
  }
  removeQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        'Are you sure you want to delete this Quote? '
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
