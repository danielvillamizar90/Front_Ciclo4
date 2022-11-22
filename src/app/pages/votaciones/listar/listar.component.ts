import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Votacion } from '../../../modelos/votacion.model';
import { VotacionesService } from '../../../servicios/votaciones.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  votaciones: Votacion[];
  nombresColumnas: string[] = ['Nombre Candidato', 'Apellido Candidato', 'Nombre Partido', 'Cantidad de Votos'];
  constructor(private miServicioVotaciones: VotacionesService, private router: Router) { }

  ngOnInit(): void {
    this.listarA1();
  }
  listarA1():void{
    this.miServicioVotaciones.listarA1().subscribe(data => {
      this.votaciones=data;
    });
  }
}

