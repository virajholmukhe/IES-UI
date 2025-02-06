import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcPlanSelectionComponent } from './dc-plan-selection.component';

describe('DcPlanSelectionComponent', () => {
  let component: DcPlanSelectionComponent;
  let fixture: ComponentFixture<DcPlanSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcPlanSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcPlanSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
