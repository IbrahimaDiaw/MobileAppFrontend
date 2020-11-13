import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCongesPage } from './details-conges.page';

describe('DetailsCongesPage', () => {
  let component: DetailsCongesPage;
  let fixture: ComponentFixture<DetailsCongesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCongesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCongesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
