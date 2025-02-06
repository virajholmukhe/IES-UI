import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArViewApplicationsComponent } from './ar-view-applications.component';

describe('ArViewApplicationsComponent', () => {
  let component: ArViewApplicationsComponent;
  let fixture: ComponentFixture<ArViewApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArViewApplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArViewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
