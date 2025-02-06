import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArCreateApplicationComponent } from './ar-create-application.component';

describe('ArCreateApplicationComponent', () => {
  let component: ArCreateApplicationComponent;
  let fixture: ComponentFixture<ArCreateApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArCreateApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArCreateApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
