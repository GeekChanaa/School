/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DocumentRequestService } from './documentRequest.service';

describe('Service: DocumentRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentRequestService]
    });
  });

  it('should ...', inject([DocumentRequestService], (service: DocumentRequestService) => {
    expect(service).toBeTruthy();
  }));
});
