import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbsencePage } from './edit-absence.page';

describe('EditAbsencePage', () => {
  let component: EditAbsencePage;
  let fixture: ComponentFixture<EditAbsencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAbsencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAbsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
