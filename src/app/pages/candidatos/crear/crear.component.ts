import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidatosService } from '../../../servicios/candidatos.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  cedula: string = "";
  intentoEnvio: boolean = false;
  elCandidato: Candidato = {
    cedula: "",
    nombre: "",
    apellido: "",
    num_resolucion: null,
  }

  constructor(private miServicioCandidato: CandidatosService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.cedula) {
      this.modoCreacion = false;
      this.cedula = this.rutaActiva.snapshot.params.cedula;
      this.getCandidato(this.cedula)
      } else {
      this.modoCreacion = true;
      }
  }
  getCandidato(cedula: string) {
    this.miServicioCandidato.getCandidato(cedula).
    subscribe(data => {
    this.elCandidato = data;
    });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
    this.intentoEnvio = true;
    this.miServicioCandidato.crear(this.elCandidato).
    subscribe(data => {
    Swal.fire(
    'Creado',
    'El Candidato ha sido creado correctamente',
    'success'
    )
    this.router.navigate(["pages/candidatos/listar"]);
    });
    }
  }
  editar(): void {
    this.intentoEnvio=true;
    if (this.validarDatosCompletos()) {
      this.miServicioCandidato.editar(this.elCandidato.cedula, this.elCandidato).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El candidato ha sido actualizado correctamente',
            'success'
          )
        this.router.navigate(["pages/candidatos/listar"]);
      });
    }
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elCandidato.cedula=="" ||
      this.elCandidato.num_resolucion == null ||
      this.elCandidato.nombre == "" ||
      this.elCandidato.apellido == "" ||
      this.elCandidato.num_resolucion == null ){
    return false;
    }else{
      return true;
    }
  }
}