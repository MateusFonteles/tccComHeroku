import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-modificar-senha',
  templateUrl: './usuarios-modificar-senha.component.html',
  styleUrls: ['./usuarios-modificar-senha.component.css']
})
export class UsuariosModificarSenhaComponent implements OnInit {

  usuario: Usuario


  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService) { }

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get('codigo')
    this.usuarioService.readByCodigo(codigo).subscribe(usuario => {
      this.usuario = usuario
    })

  }

  modificarSenha(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.toast.success('Senha modificada com sucesso!')
      this.router.navigate(['usuario/{{this.usuario.codigo}}']);
    })

  }


  cancelar(): void {
    this.router.navigate(['usuario/{{this.usuario.codigo}}']);
  }

}
