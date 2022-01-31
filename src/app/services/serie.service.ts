import { Serie } from '../models/serie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  baseUrl = "http://localhost:3001/series"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }

  create(serie: Serie): Observable<Serie> {
    return this.http.post<Serie>(this.baseUrl, serie).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readByCodigo(codigo: number): Observable<Serie>{
  const url = `${this.baseUrl}/${codigo}`
  return this.http.get<Serie>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(serie: Serie): Observable<Serie>{
  const url = `${this.baseUrl}/${serie.codigo}`
  return this.http.put<Serie>(url, serie).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(codigo: number): Observable<Serie>{
  const url = `${this.baseUrl}/${codigo}`;
  return this.http.delete<Serie>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
function serie<T>(baseUrl: string, serie: any) {
  throw new Error('Function not implemented.');
}
