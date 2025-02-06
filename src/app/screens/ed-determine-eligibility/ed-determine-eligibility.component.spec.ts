import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdDetermineEligibilityComponent } from './ed-determine-eligibility.component';

describe('EdDetermineEligibilityComponent', () => {
  let component: EdDetermineEligibilityComponent;
  let fixture: ComponentFixture<EdDetermineEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdDetermineEligibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdDetermineEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
