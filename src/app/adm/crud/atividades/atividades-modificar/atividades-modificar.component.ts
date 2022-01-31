import { AtividadeService } from './../../../../services/atividade.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/models/atividade.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Serie } from 'src/app/models/serie.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-atividades-modificar',
  templateUrl: './atividades-modificar.component.html',
  styleUrls: ['./atividades-modificar.component.css']
})
export class AtividadesModificarComponent implements OnInit {

  materiaSelecionada : Categoria

  serieSelecionada: Serie

  categorias: Categoria[]

  series: Serie[]

 atividade: Atividade


  constructor(
    private atividadeService: AtividadeService,
    private router: Router,
    private route: ActivatedRoute,
    private serieService: SerieService,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get('codigo')
    this.atividadeService.readBycodigo(codigo).subscribe(atividade => {
      this.atividade = atividade
    })
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
    this.serieService.read().subscribe(series => {
      this.series = series
    })

  }

  modificarAtividade(): void {
    // this.atividade.serie = this.serieSelecionada
    this.atividade.categoria = this.materiaSelecionada
    this.atividadeService.update(this.atividade).subscribe(() => {
      this.atividadeService.showMessage('Atividade atualizada com sucesso!')
      this.router.navigate(['adm-atividades']);
    })

  }


  cancelar(): void {
    this.router.navigate(['adm-atividades']);
  }

}



