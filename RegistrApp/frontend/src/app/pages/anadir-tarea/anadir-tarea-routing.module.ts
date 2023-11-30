import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirTareaPage } from './anadir-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirTareaPageRoutingModule {}
