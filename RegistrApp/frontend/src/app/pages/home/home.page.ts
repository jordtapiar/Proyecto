import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IonicToastService } from '../../services/ionic-toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private ionicToastService: IonicToastService,
    private toastController: ToastController
  ) {}

  showMyToast() {
    this.ionicToastService.showToast();
  }
  hideMyToast() {
    this.ionicToastService.hideToast();
  }
}
