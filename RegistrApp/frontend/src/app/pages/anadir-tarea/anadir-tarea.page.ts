import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-anadir-tarea',
  templateUrl: './anadir-tarea.page.html',
  styleUrls: ['./anadir-tarea.page.scss'],
})
export class AnadirTareaPage implements OnInit {

  editar = false
  tarea: any = {
    titulo: '',
    descripcion: '',
    inicio: '',
    limite: ''
  }

  constructor(private agendaService: AgendaService, private router: Router, private activatedRoute: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('id')) {
        this.editar = true
        this.agendaService.getTarea(paramMap.get('id')).subscribe(
          (res) => {
            //console.log(res)
            this.tarea = res
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
  
  guardarTarea(titulo, descripcion, inicio, limite) {
    this.agendaService.createTarea(this.tarea.titulo, this.tarea.descripcion, this.tarea.inicio, this.tarea.limite).subscribe(
      (res) => {
        //console.log(res)
        this.crearToast("✅ Tarea creada con éxito", 2000)
      },
      (err) => console.log(err)
    );
  }
  
  actualizar() {
    this.agendaService.update(this.tarea.id, {
      titulo: this.tarea.titulo,
      descripcion: this.tarea.descripcion,
      inicio: this.tarea.inicio,
      limite: this.tarea.limite
    }).subscribe(
      (res) => {
        //console.log(res)
        this.crearToast("✅ Tarea actualizada con éxito", 2000)
      }
    )
  }

}
