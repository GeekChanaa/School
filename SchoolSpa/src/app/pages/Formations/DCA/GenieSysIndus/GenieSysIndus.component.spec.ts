/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenieSysIndusComponent } from './GenieSysIndus.component';

describe('GenieSysIndusComponent', () => {
  let component: GenieSysIndusComponent;
  let fixture: ComponentFixture<GenieSysIndusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenieSysIndusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenieSysIndusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
