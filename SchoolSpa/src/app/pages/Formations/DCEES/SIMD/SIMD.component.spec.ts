/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SIMDComponent } from './SIMD.component';

describe('SIMDComponent', () => {
  let component: SIMDComponent;
  let fixture: ComponentFixture<SIMDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIMDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
