import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios-visualizar',
  templateUrl: './usuarios-visualizar.component.html',
  styleUrls: ['./usuarios-visualizar.component.css']
})
export class UsuariosVisualizarComponent implements OnInit {

  usuarios: Usuario[] = [];
  displayedColumns = ['codigo', 'nome', 'email', 'data', 'action']

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
    })
  }
}
