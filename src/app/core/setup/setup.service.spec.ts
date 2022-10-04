import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SetupService } from './setup.service';

describe('SetupService', () => {
  let service: SetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
