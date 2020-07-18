import { Component, OnInit } from '@angular/core';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.css']
})
export class DevelopmentsComponent implements OnInit {

  developments = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.developments = this.taskService.developments;
    this.taskService.developmentsChanged.subscribe(d => {
      this.developments = d;
    });
  }

  toCodeReview = (index: number) => {
    this.taskService.moveToCodeReview(index);
  }

}
