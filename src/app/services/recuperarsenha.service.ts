import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { API_CONFIG } from '../Config/api.config';
import { Recuperarsenha } from '../models/recuperarsenha.model';

@Injectable({
  providedIn: 'root'
})
export class RecuperarsenhaService {

  constructor(private http: HttpClient, private toast: ToastrService) { }

  enviarEmail(emailRecuperarSenha: Recuperarsenha): Observable<Recuperarsenha> {
    return this.http.post<Recuperarsenha>(`${API_CONFIG.baseUrl}/auth/forgot`, emailRecuperarSenha).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.toast.error('Ocorreu um erro!', 'Erro');
    console.log(e)
    return EMPTY;
  }
}
