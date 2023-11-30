/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  titulo = 'Lista de Tareas';

  listaTarea: any = []

  constructor(private agendaService: AgendaService, private router: Router, private alerta: AlertController) { }

  ngOnInit() {
    this.agendaService.getTareas().subscribe(
      (res) => {
        console.log(res),
        this.listaTarea = res},
      (err) => console.log(err)
    )
  }

  async eliminarTarea(id) {
    console.log(id);
    const alert = await this.alerta.create({
      header: 'Advertencia',
      message: '¿En serio quieres eliminar este ítem?',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.agendaService.deleteTarea(id).subscribe(
              (res) => {
                console.log(res)
              },
              (err) => console.log(err)
            )
          }
        }
      ]
    })

    await alert.present()
  }
}
