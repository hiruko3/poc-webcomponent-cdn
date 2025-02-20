import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarD3Component } from './bar-d3.component';

describe('BarD3Component', () => {
  let component: BarD3Component;
  let fixture: ComponentFixture<BarD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarD3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
