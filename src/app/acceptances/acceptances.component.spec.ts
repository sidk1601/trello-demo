import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptancesComponent } from './acceptances.component';

describe('AcceptancesComponent', () => {
  let component: AcceptancesComponent;
  let fixture: ComponentFixture<AcceptancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
