/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MPSIComponent } from './MPSI.component';

describe('MPSIComponent', () => {
  let component: MPSIComponent;
  let fixture: ComponentFixture<MPSIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPSIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
