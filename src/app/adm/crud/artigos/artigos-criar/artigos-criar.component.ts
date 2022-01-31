import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Artigo } from 'src/app/models/artigo.model';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-artigos-criar',
  templateUrl: './artigos-criar.component.html',
  styleUrls: ['./artigos-criar.component.css']
})
export class ArtigosCriarComponent implements OnInit {

  dataPub : string = new Date().toLocaleString()

  artigo: Artigo = {
    titulo: '',
    texto: '',
    autor: '',
    // data: this.dataPub,
  }

  titulo = new FormControl(null, Validators.minLength(5));
  texto = new FormControl(null, Validators.minLength(10));
  autor = new FormControl(null, Validators.minLength(3));

   constructor(private artigoService: ArtigoService,
     private router: Router,
     private toast: ToastrService) { }

   ngOnInit(): void {
   }

   validaCampos(): boolean{
    return this.titulo.valid && this.texto.valid && this.autor.valid;
  }

   criarArtigo(): void{
     this.artigoService.create(this.artigo).subscribe(() => {
       this.toast.success('Artigo criado!')
       this.router.navigate(['/adm-artigos'])
     })
     }

   cancelar(): void{
     this.router.navigate(['/adm-artigos'])
   }

 }
