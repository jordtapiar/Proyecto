import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IonicToastService } from 'src/app/services/ionic-toast.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {

  constructor(
    private ionicToastService: IonicToastService,
    private toastController: ToastController
  ) {}
  ngOnInit() { }
  showMyToast() {
    this.ionicToastService.showToast();
  }
  hideMyToast() {
    this.ionicToastService.hideToast();
  }

  async crearToast(mensaje: string, duracion: number) {
    const t = this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    (await t).present();
  }

  helpToast(mensaje, duracion) {
    this.crearToast("Programado con ❤️ por @AxelDreemurr y @AKM", 2000)
  }
}
