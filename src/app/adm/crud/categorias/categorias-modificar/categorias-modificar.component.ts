import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
@Component({
  selector: 'app-categorias-modificar',
  templateUrl: './categorias-modificar.component.html',
  styleUrls: ['./categorias-modificar.component.css']
})
export class CategoriasModificarComponent implements OnInit {

  categoria: Categoria = null

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get('id')
    this.categoriaService.readBycodigo(codigo).subscribe(categoria => {
      this.categoria = categoria
    });
  }

 modificarCategoria(): void {
    this.categoriaService.update(this.categoria).subscribe(() => {
      this.categoriaService.showMessage('categoria atualizada com sucesso!')
      this.router.navigate(["/adm-categorias"]);
    });
  }

  cancelar(): void {
    this.router.navigate(['/adm-categorias']);
  }

}
