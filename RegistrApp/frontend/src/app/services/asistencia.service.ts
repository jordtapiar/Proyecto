import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Asistencia {
  id?: string;
  cursosec: string;
  fecha: string;
  asistencia: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  API = "https://registrapp-app.herokuapp.com/asistencias"

  constructor(private cliente: HttpClient) { }

  getAsistencias() {
    return this.cliente.get(this.API);
  }

  createAsistencia(cursosec: string, fecha: string, asistencia: boolean) {
    return this.cliente.post(this.API, {cursosec, fecha, asistencia})
  }

  getAsistencia(id: string) {
    return this.cliente.get<Asistencia>(`${this.API}/${id}`)
  }
}
