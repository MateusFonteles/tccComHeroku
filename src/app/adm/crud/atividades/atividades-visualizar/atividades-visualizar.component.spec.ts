import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesVisualizarComponent } from './atividades-visualizar.component';

describe('AtividadesVisualizarComponent', () => {
  let component: AtividadesVisualizarComponent;
  let fixture: ComponentFixture<AtividadesVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
