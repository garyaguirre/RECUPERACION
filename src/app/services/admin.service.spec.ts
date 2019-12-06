import { TestBed } from '@angular/core/testing';

import { adminService } from './admin.service';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: adminService = TestBed.get(adminService);
    expect(service).toBeTruthy();
  });
});
