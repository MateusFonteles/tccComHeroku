import { Component, OnInit, ViewChild } from '@angular/core';
import { Artigo } from 'src/app/models/artigo.model';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-artigos-visualizar',
  templateUrl: './artigos-visualizar.component.html',
  styleUrls: ['./artigos-visualizar.component.css']
})
export class ArtigosVisualizarComponent implements OnInit {

  artigo: Artigo[] = [];
  displayedColumns = ['codigo', 'titulo', 'autor', 'data', 'action']


  constructor(private artigoService: ArtigoService) { }

  ngOnInit(): void {
    this.artigoService.read().subscribe(artigos => {
      this.artigo = artigos
    })
  }

  findAll(){
    this.artigoService.findAll().subscribe(resposta => {
      this.artigo = resposta;

    });
  }



}
