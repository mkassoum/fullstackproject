import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyLearningComponent } from './currently-learning.component';

describe('CurrentlyLearningComponent', () => {
  let component: CurrentlyLearningComponent;
  let fixture: ComponentFixture<CurrentlyLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentlyLearningComponent]
    });
    fixture = TestBed.createComponent(CurrentlyLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
