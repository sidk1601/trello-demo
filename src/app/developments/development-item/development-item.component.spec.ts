import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentItemComponent } from './development-item.component';

describe('DevelopmentItemComponent', () => {
  let component: DevelopmentItemComponent;
  let fixture: ComponentFixture<DevelopmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
