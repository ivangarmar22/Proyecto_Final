import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deportes2Component } from './deportes2.component';

describe('Deportes2Component', () => {
  let component: Deportes2Component;
  let fixture: ComponentFixture<Deportes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deportes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Deportes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
