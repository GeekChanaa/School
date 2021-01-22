/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GSEAComponent } from './GSEA.component';

describe('GSEAComponent', () => {
  let component: GSEAComponent;
  let fixture: ComponentFixture<GSEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSEAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
