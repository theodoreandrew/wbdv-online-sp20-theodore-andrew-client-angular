import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagerHomeComponent } from './course-manager-home.component';

describe('CourseManagerHomeComponent', () => {
  let component: CourseManagerHomeComponent;
  let fixture: ComponentFixture<CourseManagerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseManagerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
