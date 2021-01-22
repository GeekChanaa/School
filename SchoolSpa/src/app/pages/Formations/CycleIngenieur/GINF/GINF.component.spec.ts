/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GINFComponent } from './GINF.component';

describe('GINFComponent', () => {
  let component: GINFComponent;
  let fixture: ComponentFixture<GINFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GINFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GINFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
