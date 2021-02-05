/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentTrainingService } from './studentTraining.service';

describe('Service: StudentTraining', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentTrainingService]
    });
  });

  it('should ...', inject([StudentTrainingService], (service: StudentTrainingService) => {
    expect(service).toBeTruthy();
  }));
});
