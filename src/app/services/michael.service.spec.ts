import { TestBed, inject } from '@angular/core/testing';

import { MichaelService } from './michael.service';

describe('MichaelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MichaelService]
    });
  });

  it('should be created', inject([MichaelService], (service: MichaelService) => {
    expect(service).toBeTruthy();
  }));
});
