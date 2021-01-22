/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechIndusSimuComponent } from './TechIndusSimu.component';

describe('TechIndusSimuComponent', () => {
  let component: TechIndusSimuComponent;
  let fixture: ComponentFixture<TechIndusSimuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechIndusSimuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechIndusSimuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
