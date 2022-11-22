import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotacionesRoutingModule } from './votaciones-routing.module';
import { ListarComponent } from './listar/listar.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    VotacionesRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class VotacionesModule { }
