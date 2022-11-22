import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Votacion } from '../modelos/votacion.model';

@Injectable({
  providedIn: 'root'
})
export class VotacionesService {

  constructor(private http: HttpClient) { }

  listarA1(): Observable<Votacion[]> {
    return this.http.get<Votacion[]>(`${environment.url_gateway}/visualizaciones/votos_mayores_candidato`);
  }
}
