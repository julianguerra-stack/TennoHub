import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Warframes } from './warframes';

describe('Warframes', () => {
  let component: Warframes;
  let fixture: ComponentFixture<Warframes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Warframes],
    }).compileComponents();

    fixture = TestBed.createComponent(Warframes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
