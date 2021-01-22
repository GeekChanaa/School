/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ISMPComponent } from './ISMP.component';

describe('ISMPComponent', () => {
  let component: ISMPComponent;
  let fixture: ComponentFixture<ISMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
