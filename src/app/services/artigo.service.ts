import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { API_CONFIG } from '../Config/api.config';
import { Artigo } from '../models/artigo.model';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,
    private toast: ToastrService) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }


  findAll(): Observable<Artigo[]> {
    return this.http.get<Artigo[]>(`${API_CONFIG.baseUrl}/post`);
  }

  create(artigo: Artigo): Observable<Artigo> {
    return this.http.post<Artigo>(`${API_CONFIG.baseUrl}/post`, artigo).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
    }

  errorHandler(e: any): Observable<any>{
    this.toast.error('Ocorreu um erro!', "Erro");
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Artigo[]> {
    return this.http.get<Artigo[]>(`${API_CONFIG.baseUrl}/post`).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readByCodigo(codigo: number): Observable<Artigo>{
  const url = `${API_CONFIG.baseUrl}/post/${codigo}`
  return this.http.get<Artigo>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(artigo: Artigo): Observable<Artigo>{
  const url = `${API_CONFIG.baseUrl}/post/${artigo.codigo}`
  return this.http.put<Artigo>(url, artigo).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(codigo: number): Observable<Artigo>{
  const url = `${API_CONFIG.baseUrl}/usuario/${codigo}`;
  return this.http.delete<Artigo>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
function postagem<T>(baseUrl: string, postagem: any) {
  throw new Error('Function not implemented.');
}
