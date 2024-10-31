import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphExampleComponent } from './graph-example.component';

describe('GraphExampleComponent', () => {
  let component: GraphExampleComponent;
  let fixture: ComponentFixture<GraphExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
