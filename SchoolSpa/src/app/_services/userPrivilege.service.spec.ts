/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPrivilegeService } from './userPrivilege.service';

describe('Service: UserPrivilege', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPrivilegeService]
    });
  });

  it('should ...', inject([UserPrivilegeService], (service: UserPrivilegeService) => {
    expect(service).toBeTruthy();
  }));
});
