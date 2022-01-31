import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-crud',
  templateUrl: './categorias-crud.component.html',
  styleUrls: ['./categorias-crud.component.css']
})
export class CategoriasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navigateToCriarCategoria(): void {
    this.router.navigate(['/adm-criar-categoria'])
  }
  
  navigateToPainel(): void {
    this.router.navigate(['/adm'])
  }

}
