import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoHistoryNoticesComponent } from './co-history-notices.component';

describe('CoHistoryNoticesComponent', () => {
  let component: CoHistoryNoticesComponent;
  let fixture: ComponentFixture<CoHistoryNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoHistoryNoticesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoHistoryNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
