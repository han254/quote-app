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
  @Output() isComplete = new EventEmitter<boolean>();
  removeQuote(complete: boolean) {this.isComplete.emit(complete);}

  // quoteDelete(UpVoted: boolean) {
  //   this.isDelete.emit(UpVoted);
  // }
  ngOnInit(): void {}
}
