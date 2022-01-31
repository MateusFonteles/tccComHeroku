import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuarios-criar',
  templateUrl: './usuarios-criar.component.html',
  styleUrls: ['./usuarios-criar.component.css']
})
export class UsuariosCriarComponent implements OnInit {

  dataPub : string = new Date().toLocaleString()

  usuario: Usuario = {
    nome: '',
    email: '',
    senha:'',
    // data: this.dataPub,
  }

  //Validators.email valida se o valor recebido do input é um tipo e-mail
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));
  nome = new FormControl(null, Validators.minLength(3));


   constructor(
     private usuarioService: UsuarioService,
     private router: Router,
     private toast: ToastrService) { }

   ngOnInit(): void {
   }

   validaCampos(): boolean{
    return this.email.valid && this.senha.valid && this.nome.valid;
  }

   criarUsuario(): void{
     this.usuarioService.create(this.usuario).subscribe(() => {
       this.toast.success('Usuário cadastrado com sucesso!', 'Cadastro')
       this.router.navigate(['/'])
     }, () => { this.toast.error('E-mail já cadastrado', 'Erro cadastro');})
     }

   cancelar(): void{
     this.router.navigate(['/'])
   }

 }
