import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Mesa } from '../../../modelos/mesa.model';
import { MesaService } from '../../../servicios/mesa.service';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mesas : Mesa[];
  nombresColumnas: string[] = ['Número de Mesa', 'Número de Cedulas Inscritas', 'Opciones'];
  constructor(private miServicioMesas: MesaService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miServicioMesas.listar().subscribe(data => {
      this.mesas=data;
    });
  }
  agregar():void{
    this.router.navigate(["pages/mesas/crear"]);
  }
  editar(num_mesa:string):void{
    this.router.navigate(["pages/mesas/actualizar/"+num_mesa]);
  }
  eliminar(num_mesa:string):void{
    Swal.fire({
      title: 'Eliminar Mesa',
      text: "Estas seguro que quiere eliminar la mesa",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioMesas.eliminar(num_mesa).subscribe(data => {
          Swal.fire(
            'Emliminado!',
            'La mesa ha sido eliminada correctamente',
            'success'
          )
          this.ngOnInit();
        });
      }
    })
  }
}
