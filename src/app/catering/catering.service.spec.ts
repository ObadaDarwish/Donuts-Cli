/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CateringService } from './catering.service';

describe('CateringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CateringService]
    });
  });

  it('should ...', inject([CateringService], (service: CateringService) => {
    expect(service).toBeTruthy();
  }));
});
