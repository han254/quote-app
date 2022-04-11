import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<Quote>();
  postQuote() {
    this.addQuote.emit(this.mypostQuote);
  }
  mypostQuote = new Quote(0, '', 0, 0, new Date(), '', '');

  constructor() {}

  ngOnInit(): void {}
}


