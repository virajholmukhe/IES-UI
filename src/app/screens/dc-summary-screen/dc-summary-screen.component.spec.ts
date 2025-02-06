import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcSummaryScreenComponent } from './dc-summary-screen.component';

describe('DcSummaryScreenComponent', () => {
  let component: DcSummaryScreenComponent;
  let fixture: ComponentFixture<DcSummaryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcSummaryScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcSummaryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
