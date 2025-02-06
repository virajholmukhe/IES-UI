import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcBankDetailsComponent } from './dc-bank-details.component';

describe('DcBankDetailsComponent', () => {
  let component: DcBankDetailsComponent;
  let fixture: ComponentFixture<DcBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcBankDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
