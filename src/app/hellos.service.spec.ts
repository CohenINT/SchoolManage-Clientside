import { TestBed } from '@angular/core/testing';

import { HellosService } from './hellos.service';

describe('HellosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HellosService = TestBed.get(HellosService);
    expect(service).toBeTruthy();
  });
});
