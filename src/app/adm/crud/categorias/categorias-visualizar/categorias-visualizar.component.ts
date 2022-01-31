import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
@Component({
  selector: 'app-categorias-visualizar',
  templateUrl: './categorias-visualizar.component.html',
  styleUrls: ['./categorias-visualizar.component.css']
})
export class CategoriasVisualizarComponent implements OnInit {

  postagens: Categoria[]
  displayedColumns = ['codigo', 'nome', 'descricao', 'action']
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.read().subscribe(postagens => {
      this.postagens = postagens
    })
  }

}
