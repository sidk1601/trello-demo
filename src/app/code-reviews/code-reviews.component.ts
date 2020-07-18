import { Component, OnInit } from '@angular/core';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-code-reviews',
  templateUrl: './code-reviews.component.html',
  styleUrls: ['./code-reviews.component.css']
})
export class CodeReviewsComponent implements OnInit {

  codeReviews = [];

  constructor(private taskServie: TaskService) { }

  ngOnInit(): void {
    this.codeReviews = this.taskServie.codeReviews;
    this.taskServie.codeReviewsChanged.subscribe(cr => {
      this.codeReviews = cr;
    });
  }

  moveToAcceptance(index: number) {
    this.taskServie.moveToAcceptance(index);
  }

}
