import { Categoria } from '../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../Config/api.config';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {



  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private toast: ToastrService
    ) { }
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${API_CONFIG.baseUrl}/categoria`, categoria).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.toast.error('Ocorreu um erro!', 'Erro');
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/categoria`).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readBycodigo(codigo: number): Observable<Categoria>{
  const url = `${API_CONFIG.baseUrl}/categoria/${codigo}`
  return this.http.get<Categoria>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(categoria: Categoria): Observable<Categoria>{
  const url = `${API_CONFIG.baseUrl}/categoria/${categoria.codigo}`
  return this.http.put<Categoria>(url, categoria).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(codigo: number): Observable<Categoria>{
  const url = `${API_CONFIG.baseUrl}/categoria/${codigo}`;
  return this.http.delete<Categoria>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
function categoria<T>(baseUrl: string, categoria: any) {
  throw new Error('Function not implemented.');
}
