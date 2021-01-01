/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroupMembershipService } from './groupMembership.service';

describe('Service: GroupMembership', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupMembershipService]
    });
  });

  it('should ...', inject([GroupMembershipService], (service: GroupMembershipService) => {
    expect(service).toBeTruthy();
  }));
});
