import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCoursesComponent } from './completed-courses.component';

describe('CompletedCoursesComponent', () => {
  let component: CompletedCoursesComponent;
  let fixture: ComponentFixture<CompletedCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedCoursesComponent]
    });
    fixture = TestBed.createComponent(CompletedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
