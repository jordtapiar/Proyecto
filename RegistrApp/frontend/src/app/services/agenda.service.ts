import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Tarea {
  id?: string;
  titulo: string;
  descripcion: string;
  inicio: string;
  limite: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  API = "https://registrapp-app.herokuapp.com/tareas"

  constructor(private cliente: HttpClient) { }

  getTareas() {
    return this.cliente.get(this.API);
  }

  createTarea(titulo: string, descripcion: string, limite: string, inicio: string) {
    return this.cliente.post(this.API, {titulo, descripcion, limite, inicio})
  }

  deleteTarea(id: string) {
    return this.cliente.delete(`${this.API}/${id}`)
  }

  getTarea(id: string) {
    return this.cliente.get<Tarea>(`${this.API}/${id}`)
  }

  update(id:string, tarea: Tarea) {
    return this.cliente.put(`${this.API}/${id}`, tarea)
  }
}
