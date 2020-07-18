import { Component, OnInit } from '@angular/core';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-backlogs',
  templateUrl: './backlogs.component.html',
  styleUrls: ['./backlogs.component.css']
})
export class BacklogsComponent implements OnInit {

  backLogs = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.backLogs = this.taskService.backlogs;
    this.taskService.backlogsChanged.subscribe(bk => {
      this.backLogs = bk;
    });
  }

  moveToDevelopment(index: number) {
    if (this.taskService.developments.length === 4) {
      return;
    }
    this.taskService.moveToDevelopment(index);
  }

}
