import { AtividadeService } from 'src/app/services/atividade.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Credenciais } from 'src/app/models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds : Credenciais = {
    email: '',
    senha: ''
  }
  //Validators.email valida se o valor recebido do input é um tipo e-mail
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private router: Router,
    //private usuarioService: UsuarioService,
    private service: AuthService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.email.valid && this.senha.valid;
  }

  logar(){
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.service.successFulLogin(resposta.headers.get('Authorization').substring(7));
      this.toast.success('Login realizado com sucesso', 'Login');
      this.router.navigate(['/adm'])
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos', 'Erro login');
      this.creds.senha = '';
  });

  }
}
