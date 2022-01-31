import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-categorias-criar',
  templateUrl: './categorias-criar.component.html',
  styleUrls: ['./categorias-criar.component.css']
})
export class CategoriasCriarComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }
 
 
   constructor(private categoriaService: CategoriaService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarCategoria(): void{
     this.categoriaService.create(this.categoria).subscribe(() => {
       this.categoriaService.showMessage('Categoria criada!')
       this.router.navigate(['/adm-categorias'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/adm-categorias'])
   }
   
 }
 