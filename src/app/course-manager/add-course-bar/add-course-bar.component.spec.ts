import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseBarComponent } from './add-course-bar.component';

describe('AddCourseBarComponent', () => {
  let component: AddCourseBarComponent;
  let fixture: ComponentFixture<AddCourseBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
