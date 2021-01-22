/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MCSCComponent } from './MCSC.component';

describe('MCSCComponent', () => {
  let component: MCSCComponent;
  let fixture: ComponentFixture<MCSCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCSCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
