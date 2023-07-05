import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTimeComponent } from './live-time.component';

describe('LiveTimeComponent', () => {
  let component: LiveTimeComponent;
  let fixture: ComponentFixture<LiveTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveTimeComponent]
    });
    fixture = TestBed.createComponent(LiveTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
