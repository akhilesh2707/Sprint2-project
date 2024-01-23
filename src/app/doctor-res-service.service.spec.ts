import { TestBed } from '@angular/core/testing';

import { DoctorResServiceService } from './doctor-res-service.service';

describe('DoctorResServiceService', () => {
  let service: DoctorResServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorResServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
