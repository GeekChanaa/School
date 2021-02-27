/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GradesTComponent } from './GradesT.component';

describe('GradesTComponent', () => {
  let component: GradesTComponent;
  let fixture: ComponentFixture<GradesTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
