/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GEIComponent } from './GEI.component';

describe('GEIComponent', () => {
  let component: GEIComponent;
  let fixture: ComponentFixture<GEIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GEIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GEIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
