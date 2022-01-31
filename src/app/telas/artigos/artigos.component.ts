import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/models/artigo.model';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  artigos: Artigo[]
  totalLenght: any;
  page:number=1;

  constructor(
    private artigosService: ArtigoService) { }

  ngOnInit(): void {
    this.artigosService.read().subscribe(artigos => {
      this.artigos = artigos
      this.totalLenght = artigos.length
      console.log(artigos.length)
    })
  }
}
