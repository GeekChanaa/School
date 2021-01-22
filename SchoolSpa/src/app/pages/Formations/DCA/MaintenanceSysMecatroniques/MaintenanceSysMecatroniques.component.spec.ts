/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaintenanceSysMecatroniquesComponent } from './MaintenanceSysMecatroniques.component';

describe('MaintenanceSysMecatroniquesComponent', () => {
  let component: MaintenanceSysMecatroniquesComponent;
  let fixture: ComponentFixture<MaintenanceSysMecatroniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceSysMecatroniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceSysMecatroniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
