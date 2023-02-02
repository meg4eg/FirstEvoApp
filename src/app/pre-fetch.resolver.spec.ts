import { TestBed } from '@angular/core/testing';

import { PreFetchResolver } from './pre-fetch.resolver';

describe('PreFetchResolver', () => {
  let resolver: PreFetchResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PreFetchResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
