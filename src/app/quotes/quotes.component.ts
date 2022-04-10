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
      new Date(2020, 3, 14),
      'By:Albert Einstein',
      'peter'
    ),
    new Quote(
      1,
      'We cannot solve problems with the kind of thinking we employed when we came up with them.',
      0,
      0,
      new Date(2020, 3, 14),
      'By:Albert Einstein',
      'peter',
    ),
  ];
  arr: number[] = this.quotes.map((quote) => quote.upvotes);
  highest = Math.max(...this.arr);

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }
  removeQuote(isUpvoted: any, i: any) {
    if (isUpvoted) {
      let toDelete = confirm(
        'Are you sure you want to delete this Quote? ${this.quotes[i].quote} quote.'
      );

      if (toDelete) {
        this.quotes.splice(i, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
