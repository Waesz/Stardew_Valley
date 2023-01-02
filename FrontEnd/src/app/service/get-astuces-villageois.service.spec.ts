import { TestBed } from '@angular/core/testing';

import { GetAstucesVillageoisService } from './get-astuces-villageois.service';

describe('GetAstucesVillageoisService', () => {
  let service: GetAstucesVillageoisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAstucesVillageoisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
