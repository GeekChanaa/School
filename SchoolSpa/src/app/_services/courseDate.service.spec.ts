/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseDateService } from './courseDate.service';

describe('Service: CourseDate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDateService]
    });
  });

  it('should ...', inject([CourseDateService], (service: CourseDateService) => {
    expect(service).toBeTruthy();
  }));
});
