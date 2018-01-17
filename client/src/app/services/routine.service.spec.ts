import { TestBed, inject } from '@angular/core/testing';

import { RoutineService } from './routine.service';

describe('RoutineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutineService]
    });
  });

  it('should be created', inject([RoutineService], (service: RoutineService) => {
    expect(service).toBeTruthy();
  }));
});
