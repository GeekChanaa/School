/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrainingModuleService } from './trainingModule.service';

describe('Service: TrainingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingModuleService]
    });
  });

  it('should ...', inject([TrainingModuleService], (service: TrainingModuleService) => {
    expect(service).toBeTruthy();
  }));
});
