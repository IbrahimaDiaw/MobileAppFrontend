import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartementPage } from './edit-departement.page';

describe('EditDepartementPage', () => {
  let component: EditDepartementPage;
  let fixture: ComponentFixture<EditDepartementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
