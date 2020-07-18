import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-development-item',
  templateUrl: './development-item.component.html',
  styleUrls: ['./development-item.component.css']
})
export class DevelopmentItemComponent implements OnInit {

  @Input() development;

  constructor() { }

  ngOnInit(): void {
  }

}
