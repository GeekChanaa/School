/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GINDComponent } from './GIND.component';

describe('GINDComponent', () => {
  let component: GINDComponent;
  let fixture: ComponentFixture<GINDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GINDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GINDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
