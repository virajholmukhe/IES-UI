import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFamilyDetailsComponent } from './dc-family-details.component';

describe('DcFamilyDetailsComponent', () => {
  let component: DcFamilyDetailsComponent;
  let fixture: ComponentFixture<DcFamilyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcFamilyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcFamilyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
