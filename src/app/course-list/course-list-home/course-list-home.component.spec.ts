import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListHomeComponent } from './course-list-home.component';

describe('CourseListHomeComponent', () => {
  let component: CourseListHomeComponent;
  let fixture: ComponentFixture<CourseListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
