import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuizzesHomeComponent } from './course-quizzes-home.component';

describe('CourseQuizzesHomeComponent', () => {
  let component: CourseQuizzesHomeComponent;
  let fixture: ComponentFixture<CourseQuizzesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseQuizzesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseQuizzesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
