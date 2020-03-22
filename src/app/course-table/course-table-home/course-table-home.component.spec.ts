import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTableHomeComponent } from './course-table-home.component';

describe('CourseTableHomeComponent', () => {
  let component: CourseTableHomeComponent;
  let fixture: ComponentFixture<CourseTableHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
