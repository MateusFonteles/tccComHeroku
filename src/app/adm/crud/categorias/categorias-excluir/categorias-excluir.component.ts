import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias-excluir',
  templateUrl: './categorias-excluir.component.html',
  styleUrls: ['./categorias-excluir.component.css']
})
export class CategoriasExcluirComponent implements OnInit {

  categoria: Categoria = null

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get('id');
    this.categoriaService.readBycodigo(codigo).subscribe(categoria => {
      this.categoria = categoria
    })
  }

  excluirCategoria() {
    this.categoriaService.delete(this.categoria.codigo).subscribe(() => {
      this.categoriaService.showMessage('Categoria excuída com sucesso')
      this.router.navigate(['/adm-categorias'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/adm-categorias'])
  }

}
