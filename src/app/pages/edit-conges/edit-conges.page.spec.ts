import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCongesPage } from './edit-conges.page';

describe('EditCongesPage', () => {
  let component: EditCongesPage;
  let fixture: ComponentFixture<EditCongesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCongesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCongesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
