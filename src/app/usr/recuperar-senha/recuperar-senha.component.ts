import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Recuperarsenha } from 'src/app/models/recuperarsenha.model';
import { FormControl, Validators } from '@angular/forms';
import { RecuperarsenhaService } from 'src/app/services/recuperarsenha.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  recuperarsenha: Recuperarsenha = {
    email: '',
  }

   //Validators.email valida se o valor recebido do input é um tipo e-mail
   email = new FormControl(null, Validators.email);


  constructor(private recuperarsenhaService: RecuperarsenhaService, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.email.valid;
  }

  recuperar(){
    this.recuperarsenhaService.enviarEmail(this.recuperarsenha).subscribe(() => {
      this.toast.success('Um e-mail com sua nova senha foi enviado para voce!', 'Nova senha')
      this.router.navigate(['/usuario-login'])
    }, () => { this.toast.error('Opss e-mail não cadastrado', 'Erro cadastro');})
  }
}

