import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirTareaPageRoutingModule } from './anadir-tarea-routing.module';

import { AnadirTareaPage } from './anadir-tarea.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirTareaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnadirTareaPage]
})
export class AnadirTareaPageModule {}
