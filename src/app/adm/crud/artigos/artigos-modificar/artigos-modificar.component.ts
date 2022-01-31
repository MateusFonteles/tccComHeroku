import { Artigo } from 'src/app/models/artigo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtigoService } from 'src/app/services/artigo.service';

@Component({
  selector: 'app-artigos-modificar',
  templateUrl: './artigos-modificar.component.html',
  styleUrls: ['./artigos-modificar.component.css']
})
export class ArtigosModificarComponent implements OnInit {

  artigo: Artigo = null

  constructor(
    private artigoService: ArtigoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const codigo = +this.route.snapshot.paramMap.get('id')
    this.artigoService.readByCodigo(codigo).subscribe(artigo => {
      this.artigo = artigo
    });
  }

  modificarArtigo(): void {
    this.artigoService.update(this.artigo).subscribe(() => {
      this.artigoService.showMessage('Artigo modificado com sucesso!')
      this.router.navigate(['/adm-artigos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/adm-artigos']);
  }

}
