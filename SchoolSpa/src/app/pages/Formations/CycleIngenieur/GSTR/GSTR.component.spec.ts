/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GSTRComponent } from './GSTR.component';

describe('GSTRComponent', () => {
  let component: GSTRComponent;
  let fixture: ComponentFixture<GSTRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSTRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
