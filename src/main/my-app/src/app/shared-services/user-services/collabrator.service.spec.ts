import { TestBed, inject } from '@angular/core/testing';

import { CollabratorService } from './collabrator.service';

describe('CollabratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollabratorService]
    });
  });

  it('should be created', inject([CollabratorService], (service: CollabratorService) => {
    expect(service).toBeTruthy();
  }));
});
