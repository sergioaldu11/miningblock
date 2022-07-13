import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigerosComponent } from './ligeros.component';

describe('LigerosComponent', () => {
  let component: LigerosComponent;
  let fixture: ComponentFixture<LigerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
