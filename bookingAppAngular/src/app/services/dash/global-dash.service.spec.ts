import { TestBed } from '@angular/core/testing';

import { GlobalDashService } from './global-dash.service';

describe('GlobalDashService', () => {
  let service: GlobalDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
