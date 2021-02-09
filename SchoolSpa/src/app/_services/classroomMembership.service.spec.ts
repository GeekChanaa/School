/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClassroomMembershipService } from './classroomMembership.service';

describe('Service: ClassroomMembership', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassroomMembershipService]
    });
  });

  it('should ...', inject([ClassroomMembershipService], (service: ClassroomMembershipService) => {
    expect(service).toBeTruthy();
  }));
});
