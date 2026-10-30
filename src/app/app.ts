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
    'Bienvenido al entorno de producción. La aplicación está disponible para su uso y puedes consultar aquí el estado de este despliegue.';
}
