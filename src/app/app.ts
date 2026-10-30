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
    'Bienvenido a la aplicación. Aquí podrás consultar el estado de tu espacio de trabajo para realizar todas las pruebas de calidad necesarias.';
}
