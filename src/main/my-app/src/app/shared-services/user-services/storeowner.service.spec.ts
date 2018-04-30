import { TestBed, inject } from '@angular/core/testing';

import { StoreownerService } from './storeowner.service';

describe('StoreownerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreownerService]
    });
  });

  it('should be created', inject([StoreownerService], (service: StoreownerService) => {
    expect(service).toBeTruthy();
  }));
});
