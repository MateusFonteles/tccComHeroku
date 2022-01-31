import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesExcluirComponent } from './atividades-excluir.component';

describe('AtividadesExcluirComponent', () => {
  let component: AtividadesExcluirComponent;
  let fixture: ComponentFixture<AtividadesExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
