import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAttemptsDetailComponent } from './quiz-attempts-detail.component';

describe('QuizAttemptsDetailComponent', () => {
  let component: QuizAttemptsDetailComponent;
  let fixture: ComponentFixture<QuizAttemptsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAttemptsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAttemptsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
