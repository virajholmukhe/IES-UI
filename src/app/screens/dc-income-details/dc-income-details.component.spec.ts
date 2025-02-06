import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcIncomeDetailsComponent } from './dc-income-details.component';

describe('DcIncomeDetailsComponent', () => {
  let component: DcIncomeDetailsComponent;
  let fixture: ComponentFixture<DcIncomeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcIncomeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcIncomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
