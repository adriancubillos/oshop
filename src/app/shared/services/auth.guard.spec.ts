import { inject, TestBed } from '@angular/core/testing';
import { AuthGuard } from 'shared/services/auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthGuard ],
    });
  });

  it(
    'should ...',
    inject([ AuthGuard ], (guard: AuthGuard) => {
      expect(guard).toBeTruthy();
    }),
  );
});
