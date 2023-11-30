import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-asistencia',
  templateUrl: './add-asistencia.page.html',
  styleUrls: ['./add-asistencia.page.scss'],
})
export class AddAsistenciaPage implements OnInit {

  editar = false
  asistencia: any = {
    cursosec: '',
    fecha: '',
    asistencia: ''
  }

  constructor(private asistenciaService: AsistenciaService, private router: Router, private activatedRoute: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.editar = true
        this.asistenciaService.getAsistencia(paramMap.get('id')).subscribe(
          (res) => {
            //console.log(res)
            this.asistencia = res
          }
        )
      }
    })
  }

  async crearToast(mensaje: string, duracion: number) {
    const t = this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    (await t).present();
  }
  
  guardarAsistencia(cursosec, fecha, asistencia) {
    this.asistenciaService.createAsistencia(this.asistencia.cursosec, this.asistencia.fecha, this.asistencia.asistencia).subscribe(
      (res) => {
        //console.log(res)
        this.crearToast("✅ Asistencia registrada con éxito", 2000)
      },
      (err) => console.log(err)
    );
  }
}
