import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibridasComponent } from './hibridas.component';

describe('HibridasComponent', () => {
  let component: HibridasComponent;
  let fixture: ComponentFixture<HibridasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HibridasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HibridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
