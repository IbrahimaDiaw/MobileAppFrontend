import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPage } from './formation.page';

describe('FormationPage', () => {
  let component: FormationPage;
  let fixture: ComponentFixture<FormationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
