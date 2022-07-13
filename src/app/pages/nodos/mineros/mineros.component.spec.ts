import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinerosComponent } from './mineros.component';

describe('MinerosComponent', () => {
  let component: MinerosComponent;
  let fixture: ComponentFixture<MinerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
