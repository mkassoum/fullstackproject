import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectPopupComponent } from './add-subject-popup.component';

describe('AddSubjectPopupComponent', () => {
  let component: AddSubjectPopupComponent;
  let fixture: ComponentFixture<AddSubjectPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubjectPopupComponent]
    });
    fixture = TestBed.createComponent(AddSubjectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
