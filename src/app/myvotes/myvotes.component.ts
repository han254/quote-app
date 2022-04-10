import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myvotes',
  templateUrl: './myvotes.component.html',
  styleUrls: ['./myvotes.component.css']
})
export class MyvotesComponent implements OnInit {
  numberOfupvotes: number = 0;
  upvotes() {
    this.numberOfupvotes++;
  }
numberOfdownvotes: number = 0;
  downvotes() {
    this.numberOfdownvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
