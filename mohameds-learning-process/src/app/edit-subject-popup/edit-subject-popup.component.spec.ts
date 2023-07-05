import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubjectPopupComponent } from './edit-subject-popup.component';

describe('EditSubjectPopupComponent', () => {
  let component: EditSubjectPopupComponent;
  let fixture: ComponentFixture<EditSubjectPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSubjectPopupComponent]
    });
    fixture = TestBed.createComponent(EditSubjectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
