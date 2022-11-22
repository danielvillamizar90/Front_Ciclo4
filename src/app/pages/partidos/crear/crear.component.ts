import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Partido } from '../../../modelos/partido.model';
import { PartidosService } from '../../../servicios/partidos.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  nombre: string = "";
  intentoEnvio: boolean = false;
  elPartido: Partido = {
    nombre: "",
    lema: "",
  }

  constructor(private miServicioPartido: PartidosService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.nombre) {
      this.modoCreacion = false;
      this.nombre = this.rutaActiva.snapshot.params.nombre;
      this.getPartido(this.nombre)
      } else {
      this.modoCreacion = true;
      }
  }
  getPartido(nombre: string) {
    this.miServicioPartido.getPartido(nombre).
    subscribe(data => {
    this.elPartido = data;
    });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
    this.intentoEnvio = true;
    this.miServicioPartido.crear(this.elPartido).
    subscribe(data => {
    Swal.fire(
    'Creado',
    'El Partido ha sido creado correctamente',
    'success'
    )
    this.router.navigate(["pages/partidos/listar"]);
    });
    }
  }
  editar(): void {
    this.intentoEnvio=true;
    if (this.validarDatosCompletos()) {
      this.miServicioPartido.editar(this.elPartido.nombre, this.elPartido).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El partido ha sido actualizado correctamente',
            'success'
          )
        this.router.navigate(["pages/partidos/listar"]);
      });
    }
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elPartido.nombre=="" ||
      this.elPartido.lema == ""){
    return false;
    }else{
      return true;
    }
  }
}
