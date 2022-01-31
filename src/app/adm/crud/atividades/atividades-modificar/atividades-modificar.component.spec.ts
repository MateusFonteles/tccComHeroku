import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesModificarComponent } from './atividades-modificar.component';

describe('AtividadesModificarComponent', () => {
  let component: AtividadesModificarComponent;
  let fixture: ComponentFixture<AtividadesModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
