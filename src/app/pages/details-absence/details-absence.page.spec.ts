import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAbsencePage } from './details-absence.page';

describe('DetailsAbsencePage', () => {
  let component: DetailsAbsencePage;
  let fixture: ComponentFixture<DetailsAbsencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAbsencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAbsencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
