import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  categorias: Categoria[]
  panelOpenState = false;

  @Output() sidenavClose = new EventEmitter();
 
  constructor(private categoriaService: CategoriaService) { }
 
  ngOnInit() {
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
}