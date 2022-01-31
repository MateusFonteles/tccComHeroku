import { Categoria } from 'src/app/models/categoria.model';
import { AtividadeService } from 'src/app/services/atividade.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/models/atividade.model';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie.service';
import { url } from 'inspector';

@Component({
  selector: 'app-atividades-criar',
  templateUrl: './atividades-criar.component.html',
  styleUrls: ['./atividades-criar.component.css']
})
export class AtividadesCriarComponent implements OnInit {

  imagens: any[]=[];
  urlImagem: any;

  categorias: Categoria[]
  series: Serie[]

  dataPub : string = new Date().toLocaleString()

 atividade: Atividade = {
  codigo: 0,
  titulo:'',
  // serie: null,
  categoria: null,
  // imagem: '' ,
  texto: '',
  autor:'',
  // data: this.dataPub
 }

 temImagem: boolean = false

   constructor(
     private atividadeService: AtividadeService,
     private router: Router,
     private categoriaService: CategoriaService,
     private serieService: SerieService
     ) { }

   ngOnInit(): void {
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
    this.serieService.read().subscribe(series => {
      this.series = series
    })
    }

    carregarImagem(event:any){
      let arquivos = event.target.files
      let reader= new FileReader();
      let nome="Spaco_educar"
      reader.readAsDataURL(arquivos[0]);
      reader.onloadend = ()=>{
        console.log(reader.result);
        this.imagens.push(reader.result);
        this.atividadeService.subirImagem(nome+"_"+Date.now(), reader.result).then(urlImagem=>{
          console.log(urlImagem);
          this.urlImagem = urlImagem;
          this.temImagem = true;
        })
      }

    }


   criarAtividade(): void{
     this.atividade.autor = this.urlImagem
     this.atividadeService.create(this.atividade).subscribe(() => {
       this.atividadeService.showMessage('Postagem criada!')
       this.router.navigate(['/adm-atividades'])
     })
     }

   cancelar(): void{
     this.router.navigate(['/adm-atividades'])
   }

  }
