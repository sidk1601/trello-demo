import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acceptance-item',
  templateUrl: './acceptance-item.component.html',
  styleUrls: ['./acceptance-item.component.css']
})
export class AcceptanceItemComponent implements OnInit {

  @Input() acceptance;

  constructor() { }

  ngOnInit(): void {
  }

}
