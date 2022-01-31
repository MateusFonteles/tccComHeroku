import { Categoria } from './../../models/categoria.model';
import { AtividadeService } from './../../services/atividade.service';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/models/atividade.model';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {
  
  categorias: Categoria[]
  atividades: Atividade[] 
  materiaSelecionada:any = ''
  totalLenght: any;
  page:number;
  atividade: Atividade
  atividadesArray:Atividade[]
    
  constructor(
    private atividadeService : AtividadeService, 
    private categoriaService:CategoriaService,
    ) { }
    
    ngOnInit(): void {
      this.atividadeService.read().subscribe(atividades => {
        this.atividades = atividades
        this.totalLenght = atividades.length
        console.log(atividades.length)
      }),
      this.categoriaService.read().subscribe(categorias => {
        this.categorias = categorias
      })
    }
    
  selecionarMateria(categoria:any): void {
    this.materiaSelecionada = categoria
   }

  reiniciarMateriaSelecionada(){
    this.materiaSelecionada = '';
  }

}
  