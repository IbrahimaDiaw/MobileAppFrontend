import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencePage } from './absence.page';

describe('AbsencePage', () => {
  let component: AbsencePage;
  let fixture: ComponentFixture<AbsencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
