import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupernodosComponent } from './supernodos.component';

describe('SupernodosComponent', () => {
  let component: SupernodosComponent;
  let fixture: ComponentFixture<SupernodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupernodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupernodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
