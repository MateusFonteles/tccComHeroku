import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get('codigo')
    this.usuarioService.readByCodigo(codigo).subscribe(usuario => {
      this.usuario = usuario
    });
  }

sair(){
  this.router.navigate(['/home'])
}

}
