import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasExcluirComponent } from './categorias-excluir.component';

describe('CategoriasExcluirComponent', () => {
  let component: CategoriasExcluirComponent;
  let fixture: ComponentFixture<CategoriasExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
