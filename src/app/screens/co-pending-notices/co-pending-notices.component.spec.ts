import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPendingNoticesComponent } from './co-pending-notices.component';

describe('CoPendingNoticesComponent', () => {
  let component: CoPendingNoticesComponent;
  let fixture: ComponentFixture<CoPendingNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoPendingNoticesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoPendingNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
