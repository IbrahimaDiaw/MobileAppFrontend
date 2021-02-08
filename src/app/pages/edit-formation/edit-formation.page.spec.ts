import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormationPage } from './edit-formation.page';

describe('EditFormationPage', () => {
  let component: EditFormationPage;
  let fixture: ComponentFixture<EditFormationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
