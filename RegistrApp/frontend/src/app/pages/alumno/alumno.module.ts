import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPageRoutingModule } from './alumno-routing.module';

import { AlumnoPage } from './alumno.page'; 
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlumnoPage]
})
export class AlumnoPageModule {}
