import { TestBed } from '@angular/core/testing';

import { MainAperanceAppInfoService } from './main-aperance-app-info.service';

describe('MainAperanceAppInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainAperanceAppInfoService = TestBed.get(MainAperanceAppInfoService);
    expect(service).toBeTruthy();
  });
});
