/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MSILComponent } from './MSIL.component';

describe('MSILComponent', () => {
  let component: MSILComponent;
  let fixture: ComponentFixture<MSILComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSILComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSILComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
