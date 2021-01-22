/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MSCEEComponent } from './MSCEE.component';

describe('MSCEEComponent', () => {
  let component: MSCEEComponent;
  let fixture: ComponentFixture<MSCEEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSCEEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSCEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
