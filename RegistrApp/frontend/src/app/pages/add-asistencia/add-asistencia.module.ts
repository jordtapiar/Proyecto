import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAsistenciaPageRoutingModule } from './add-asistencia-routing.module';

import { AddAsistenciaPage } from './add-asistencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAsistenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddAsistenciaPage]
})
export class AddAsistenciaPageModule {}
