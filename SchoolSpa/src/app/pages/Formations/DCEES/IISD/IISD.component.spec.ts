/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IISDComponent } from './IISD.component';

describe('IISDComponent', () => {
  let component: IISDComponent;
  let fixture: ComponentFixture<IISDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IISDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IISDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
