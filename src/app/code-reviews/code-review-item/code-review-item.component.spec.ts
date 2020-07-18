import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeReviewItemComponent } from './code-review-item.component';

describe('CodeReviewItemComponent', () => {
  let component: CodeReviewItemComponent;
  let fixture: ComponentFixture<CodeReviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeReviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
