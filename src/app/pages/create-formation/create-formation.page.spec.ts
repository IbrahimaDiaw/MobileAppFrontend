import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormationPage } from './create-formation.page';

describe('CreateFormationPage', () => {
  let component: CreateFormationPage;
  let fixture: ComponentFixture<CreateFormationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
