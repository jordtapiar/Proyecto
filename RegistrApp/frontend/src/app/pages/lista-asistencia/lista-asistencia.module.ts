import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAsistenciaPageRoutingModule } from './lista-asistencia-routing.module';

import { ListaAsistenciaPage } from './lista-asistencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAsistenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaAsistenciaPage]
})
export class ListaAsistenciaPageModule {}
