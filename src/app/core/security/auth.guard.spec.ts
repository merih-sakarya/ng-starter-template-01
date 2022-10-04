import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from '@core/services/authentication.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let service: AuthGuard;
  let authenticationTestingService = jasmine.createSpyObj<AuthenticationService>(['isLoggedIn']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AuthenticationService, useValue: authenticationTestingService }]
    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
