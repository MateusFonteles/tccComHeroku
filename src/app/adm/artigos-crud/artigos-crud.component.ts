import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigos-crud',
  templateUrl: './artigos-crud.component.html',
  styleUrls: ['./artigos-crud.component.css']
})
export class ArtigosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToCriarArtigo(): void {
    this.router.navigate(['/adm-criar-artigo'])
  }
  navigateToPainel(): void {
    this.router.navigate(['/adm'])
  }
}


