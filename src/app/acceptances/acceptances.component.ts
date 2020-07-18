import { Component, OnInit } from '@angular/core';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-acceptances',
  templateUrl: './acceptances.component.html',
  styleUrls: ['./acceptances.component.css']
})
export class AcceptancesComponent implements OnInit {

  acceptances = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.acceptances = this.taskService.acceptances;
    this.taskService.acceptancesChanged.subscribe(a => {
      this.acceptances = a;
    });
  }

}
