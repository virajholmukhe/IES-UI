import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCorrespondenceComponent } from './co-correspondence.component';

describe('CoCorrespondenceComponent', () => {
  let component: CoCorrespondenceComponent;
  let fixture: ComponentFixture<CoCorrespondenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoCorrespondenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoCorrespondenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
