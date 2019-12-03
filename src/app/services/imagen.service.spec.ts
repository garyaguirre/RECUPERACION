import { TestBed } from '@angular/core/testing';

import { imagenService } from './imagen.service';

describe('imagenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: imagenService = TestBed.get(imagenService);
    expect(service).toBeTruthy();
  });
});