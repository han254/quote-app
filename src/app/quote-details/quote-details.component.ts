import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote!: Quote;
  constructor() {}
  @Output() isVoted = new EventEmitter<boolean>();
  removeQuote(complete: boolean): void {}

  quoteDelete(UpVoted: boolean) {
    this['isVoted'].emit(UpVoted);
  }
  ngOnInit(): void {}
}
