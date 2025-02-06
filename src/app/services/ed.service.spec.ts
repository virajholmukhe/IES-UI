import { TestBed } from '@angular/core/testing';

import { EdService } from './ed.service';

describe('EdService', () => {
  let service: EdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
