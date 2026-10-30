import { Component } from '@angular/core';
import { Header } from './header/header';

@Component({
  imports: [Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = 'Proyecto Despliegues con Angular';
  protected readonly welcomeMessage =
    'Bienvenido al entorno de pruebas de aceptación de usuario. Valida los flujos principales y confirma que la aplicación responde a las necesidades del usuario antes de su lanzamiento.';
}
