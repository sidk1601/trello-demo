import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-review-item',
  templateUrl: './code-review-item.component.html',
  styleUrls: ['./code-review-item.component.css']
})
export class CodeReviewItemComponent implements OnInit {

  @Input() codeReview;
  constructor() { }

  ngOnInit(): void {
  }

}
