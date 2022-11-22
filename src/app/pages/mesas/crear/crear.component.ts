import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import { MesaService } from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  num_mesa: string = "";
  intentoEnvio: boolean = false;
  laMesa: Mesa = {
    num_mesa: "",
    num_cedulas_ins: null
  }

  constructor(private miServicioMesas: MesaService, private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.num_mesa) {
      this.modoCreacion = false;
      this.num_mesa = this.rutaActiva.snapshot.params.num_mesa;
      this.getMesa(this.num_mesa)
      } else {
      this.modoCreacion = true;
      }
  }
  getMesa(num_mesa: string) {
    this.miServicioMesas.getMesa(num_mesa).
    subscribe(data => {
    this.laMesa = data;
    });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
    this.intentoEnvio = true;
    this.miServicioMesas.crear(this.laMesa).
    subscribe(data => {
    Swal.fire(
    'Creado',
    'La Mesa ha sido creado correctamente',
    'success'
    )
    this.router.navigate(["pages/mesas/listar"]);
    });
    }
  }
  editar(): void {
    this.intentoEnvio=true;
    if (this.validarDatosCompletos()) {
      this.miServicioMesas.editar(this.laMesa.num_mesa, this.laMesa).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'La Mesa ha sido actualizado correctamente',
            'success'
          )
        this.router.navigate(["pages/mesas/listar"]);
      });
    }
  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.laMesa.num_mesa=="" ||
      this.laMesa.num_cedulas_ins == null ){
    return false;
    }else{
      return true;
    }
  }
}
