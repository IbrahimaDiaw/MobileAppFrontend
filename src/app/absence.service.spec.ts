import { TestBed } from '@angular/core/testing';

import { AbsenceService } from './absence.service';

describe('AbsenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbsenceService = TestBed.get(AbsenceService);
    expect(service).toBeTruthy();
  });
});
