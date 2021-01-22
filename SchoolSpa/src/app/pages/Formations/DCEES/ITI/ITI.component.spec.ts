/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ITIComponent } from './ITI.component';

describe('ITIComponent', () => {
  let component: ITIComponent;
  let fixture: ComponentFixture<ITIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
