import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../Config/api.config';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //baseUrl = "http://localhost:3001/usuarios"

 /* constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
 */
//this.http.post(`${API_CONFIG.baseUrl}/login`

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

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${API_CONFIG.baseUrl}/usuario`, usuario).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.toast.error('Ocorreu um erro!', 'Erro');
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API_CONFIG.baseUrl}/usuario`).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readByCodigo(codigo: number): Observable<Usuario>{
  const url = `${API_CONFIG.baseUrl}/usuario/${codigo}`
  return this.http.get<Usuario>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(usuario: Usuario): Observable<Usuario>{
  const url = `${API_CONFIG.baseUrl}/usuario/${usuario.codigo}`
  return this.http.put<Usuario>(url, usuario).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(codigo: number): Observable<Usuario>{
  const url = `${API_CONFIG.baseUrl}/usuario/${codigo}`;
  return this.http.delete<Usuario>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
