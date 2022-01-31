import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosVisualizarComponent } from './artigos-visualizar.component';

describe('ArtigosVisualizarComponent', () => {
  let component: ArtigosVisualizarComponent;
  let fixture: ComponentFixture<ArtigosVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
