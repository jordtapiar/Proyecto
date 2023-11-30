import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { Alert } from 'selenium-webdriver';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usus: any = []

  constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private toastController: ToastController) { }

  ngOnInit() {
    this.loadUsus();
  }

  loadUsus() {
    this.usuarioService.leerUsuarios().subscribe( 
      (res) => {
      this.usus=res
    });
  }

  login(username, pass) {
    for(var aux of this.usus) {
      if (aux.username == username.value) {
        if (aux.pass == pass.value) {
          this.router.navigate(['/alumno'])
        }
        else {
          this.crearToast("🚫 Contraseña incorrecta.", 2000)
        }
      }
    }
  }

  async crearToast(mensaje: string, duracion: number) {
    const t = this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    (await t).present();
  }

}
