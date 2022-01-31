import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasVisualizarComponent } from './categorias-visualizar.component';

describe('CategoriasVisualizarComponent', () => {
  let component: CategoriasVisualizarComponent;
  let fixture: ComponentFixture<CategoriasVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
