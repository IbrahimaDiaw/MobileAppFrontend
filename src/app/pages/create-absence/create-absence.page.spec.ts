import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAbsencePage } from './create-absence.page';

describe('CreateAbsencePage', () => {
  let component: CreateAbsencePage;
  let fixture: ComponentFixture<CreateAbsencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAbsencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAbsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
