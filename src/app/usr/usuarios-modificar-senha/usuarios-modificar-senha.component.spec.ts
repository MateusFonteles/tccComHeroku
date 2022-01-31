import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosModificarSenhaComponent } from './usuarios-modificar-senha.component';

describe('UsuariosModificarSenhaComponent', () => {
  let component: UsuariosModificarSenhaComponent;
  let fixture: ComponentFixture<UsuariosModificarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosModificarSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosModificarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
