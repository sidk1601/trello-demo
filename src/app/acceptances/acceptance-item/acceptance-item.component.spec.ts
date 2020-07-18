import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceItemComponent } from './acceptance-item.component';

describe('AcceptanceItemComponent', () => {
  let component: AcceptanceItemComponent;
  let fixture: ComponentFixture<AcceptanceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
