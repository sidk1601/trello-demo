import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TaskService } from './../task.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  doShowForm = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if(this.taskService.backlogs.length === 5) {
      this.doShowForm = false;
      return;
    }
    const dataObj = {
      title: form.value.title,
      description: form.value.description,
      dueDate: form.value.date
    };
    this.taskService.addToBacklogs(dataObj);
    this.doShowForm = false;
  }

  showForm() {
    this.doShowForm = true;
  }

}
