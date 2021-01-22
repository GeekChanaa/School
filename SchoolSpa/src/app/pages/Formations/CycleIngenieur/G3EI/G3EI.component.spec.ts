/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { G3EIComponent } from './G3EI.component';

describe('G3EIComponent', () => {
  let component: G3EIComponent;
  let fixture: ComponentFixture<G3EIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G3EIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G3EIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
