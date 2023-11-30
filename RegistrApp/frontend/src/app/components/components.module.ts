import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadologinComponent } from './encabezadologin/encabezadologin.component';
import { EncabezadoforgotComponent } from './encabezadoforgot/encabezadoforgot.component';
import { EncabezadolistComponent } from './encabezadolist/encabezadolist.component';
import { EncabezadoaddComponent } from './encabezadoadd/encabezadoadd.component';
import { EncabezadosignupComponent } from './encabezadosignup/encabezadosignup.component';
import { EncabezadoaddasisComponent } from './encabezadoaddasis/encabezadoaddasis.component';
import { EncabezadolistasisComponent } from './encabezadolistasis/encabezadolistasis.component';




@NgModule({
  declarations: [
    EncabezadoComponent,
    FooterComponent,
    EncabezadologinComponent,
    EncabezadoforgotComponent,
    FooterComponent,
    EncabezadolistComponent,
    EncabezadoaddComponent,
    EncabezadosignupComponent,
    EncabezadoaddasisComponent,
    EncabezadolistasisComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EncabezadoComponent,
    EncabezadologinComponent,
    EncabezadoforgotComponent,
    FooterComponent,
    EncabezadolistComponent,
    EncabezadoaddComponent,
    EncabezadosignupComponent,
    EncabezadoaddasisComponent,
    EncabezadolistasisComponent
  ]
})
export class ComponentsModule { }
