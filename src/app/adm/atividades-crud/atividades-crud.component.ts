import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atividades-crud',
  templateUrl: './atividades-crud.component.html',
  styleUrls: ['./atividades-crud.component.css']
})
export class AtividadesCrudComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToAtividadeCreate(): void {
    this.router.navigate(['/adm-criar-atividade'])
  }
  
  navigateToPainel(): void {
    this.router.navigate(['/adm'])
  }

}