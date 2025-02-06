import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcEducationDetailsComponent } from './dc-education-details.component';

describe('DcEducationDetailsComponent', () => {
  let component: DcEducationDetailsComponent;
  let fixture: ComponentFixture<DcEducationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcEducationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
