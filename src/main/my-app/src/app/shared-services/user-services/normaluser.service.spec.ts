import { TestBed, inject } from '@angular/core/testing';

import { NormaluserService } from './normaluser.service';

describe('NormaluserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NormaluserService]
    });
  });

  it('should be created', inject([NormaluserService], (service: NormaluserService) => {
    expect(service).toBeTruthy();
  }));
});
