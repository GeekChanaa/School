/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MIComponent } from './MI.component';

describe('MIComponent', () => {
  let component: MIComponent;
  let fixture: ComponentFixture<MIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
