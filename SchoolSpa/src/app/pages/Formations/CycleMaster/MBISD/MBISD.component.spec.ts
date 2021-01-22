/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MBISDComponent } from './MBISD.component';

describe('MBISDComponent', () => {
  let component: MBISDComponent;
  let fixture: ComponentFixture<MBISDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBISDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBISDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
