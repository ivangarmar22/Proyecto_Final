import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicios1Component } from './servicios1.component';

describe('Servicios1Component', () => {
  let component: Servicios1Component;
  let fixture: ComponentFixture<Servicios1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicios1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servicios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
