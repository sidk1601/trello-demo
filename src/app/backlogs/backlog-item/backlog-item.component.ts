import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backlog-item',
  templateUrl: './backlog-item.component.html',
  styleUrls: ['./backlog-item.component.css']
})
export class BacklogItemComponent implements OnInit {

  @Input() backlog;

  constructor() { }

  ngOnInit(): void {
  }

}
