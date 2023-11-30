import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  usus: any = []

  usuarios: any = {
    username: '',
    pass: ''
  }
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

  createUsuario(username, pass) {
    this.usuarioService.createUsuario(this.usus.username, this.usus.pass).subscribe(
      (res) => {
        //console.log(res)
        this.crearToast("✅ Usuario registrado con éxito, ya puedes iniciar sesión", 2000)
      },
      (err) => console.log(err)
    );
  }

  async crearToast(mensaje: string, duracion: number) {
    const t = this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    (await t).present();
  }

}
