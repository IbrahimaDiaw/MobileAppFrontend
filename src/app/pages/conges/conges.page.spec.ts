import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesPage } from './conges.page';

describe('CongesPage', () => {
  let component: CongesPage;
  let fixture: ComponentFixture<CongesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
