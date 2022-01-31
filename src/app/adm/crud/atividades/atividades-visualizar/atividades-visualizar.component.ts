import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/models/atividade.model';
import { AtividadeService } from 'src/app/services/atividade.service';

@Component({
  selector: 'app-atividades-visualizar',
  templateUrl: './atividades-visualizar.component.html',
  styleUrls: ['./atividades-visualizar.component.css']
})
export class AtividadesVisualizarComponent implements OnInit {

  atividades: Atividade[]
  displayedColumns = ['codigo', 'titulo', 'materia', 'autor', 'texto', 'action']

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
    })
  }

}
