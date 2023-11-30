import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API = "https://registrapp-app.herokuapp.com/usus/"

  constructor(private cliente: HttpClient) {}

  leerUsuarios() {
    return this.cliente.get(this.API)
  }

  createUsuario(username: string, pass: string) {
    return this.cliente.post(this.API, {username, pass})
  }
}