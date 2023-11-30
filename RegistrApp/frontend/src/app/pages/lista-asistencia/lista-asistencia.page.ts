import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/services/asistencia.service';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.page.html',
  styleUrls: ['./lista-asistencia.page.scss'],
})
export class ListaAsistenciaPage implements OnInit {

  titulo = 'Resumen de Asistencias';

  listaAsistencia: any = []

  constructor(private asistenciaService: AsistenciaService, private router: Router, private alerta: AlertController) { }

  ngOnInit() {
    this.asistenciaService.getAsistencias().subscribe(
      (res) => {
        console.log(res),
        this.listaAsistencia = res},
      (err) => console.log(err)
    )
  }
}
