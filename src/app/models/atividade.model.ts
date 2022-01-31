import { Serie } from '../models/serie.model';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';
export interface Atividade {
    codigo?: number
    autor: string
    titulo:string
    texto: string
    categoria: Categoria
    // serie: Serie
    // imagem: any
    // data: string
}
