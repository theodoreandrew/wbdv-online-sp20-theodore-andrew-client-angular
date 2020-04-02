import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultipleChoicesComponent } from './question-multiple-choices.component';

describe('QuestionMultipleChoicesComponent', () => {
  let component: QuestionMultipleChoicesComponent;
  let fixture: ComponentFixture<QuestionMultipleChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMultipleChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMultipleChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
