import { TestBed } from '@angular/core/testing';

import { ArcadiaService } from './arcadia.service';

describe('TestService', () => {
  let service: ArcadiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcadiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
