import { TestBed } from '@angular/core/testing';

import { CaoordinatesMapperService } from './coordinates-mapper.service';

describe('CaoordinatesMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaoordinatesMapperService = TestBed.get(CaoordinatesMapperService);
    expect(service).toBeTruthy();
  });
});
