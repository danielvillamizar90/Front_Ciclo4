import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';
import { Partido } from '../modelos/partido.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${environment.url_gateway}/candidatos`);
  }
  eliminar(cedula: string) {
    return this.http.delete<Candidato>(`${environment.url_gateway}/candidatos/${cedula}`);
  }
  getCandidato(cedula: string): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.url_gateway}/candidatos/${cedula}`);
  }
  crear(elCandidato: Candidato) {
  return this.http.post(`${environment.url_gateway}/candidatos`,
  elCandidato);
  }
  editar(cedula:string,elCandidato: Candidato) {
  return this.http.put(`${environment.url_gateway}/candidatos/${cedula}`,
  elCandidato);
  }
  asignar(cedula:string,elCandidato: Candidato, nombre:string,elPartido: Partido) {
    let bodyString = JSON.stringify({ elCandidato, elPartido});
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.http.put(`${environment.url_gateway}/candidatos/${cedula}/partido/${nombre}`,
    bodyString,{headers});
  }
}
