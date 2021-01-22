/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SICComponent } from './SIC.component';

describe('SICComponent', () => {
  let component: SICComponent;
  let fixture: ComponentFixture<SICComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SICComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
