import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Torneos1Component } from './torneos1.component';

describe('Torneos1Component', () => {
  let component: Torneos1Component;
  let fixture: ComponentFixture<Torneos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Torneos1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Torneos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
