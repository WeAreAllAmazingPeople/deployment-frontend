import { TestBed } from '@angular/core/testing';

import { SecretService } from './secret.service';

describe('SecretServiceService', () => {
  let service: SecretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
