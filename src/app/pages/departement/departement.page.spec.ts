import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementPage } from './departement.page';

describe('DepartementPage', () => {
  let component: DepartementPage;
  let fixture: ComponentFixture<DepartementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
