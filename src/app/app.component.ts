import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TennoDataService } from "./services/tenno-data.service";
import { Tenno } from "./models/tenno.models";

// Componente raíz

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  /* Perfil del jugador, obtenido del servicio inyectado. */
  tenno: Tenno;

  /* Definición de los ítems de la barra de navegación inferior. */
  navItems = [
    { ruta: "", etiqueta: "Inicio", icono: "bi-house" },
    { ruta: "builds", etiqueta: "Builds", icono: "bi-grid-3x3-gap" },
    { ruta: "farmeo", etiqueta: "Farmeo", icono: "bi-geo-alt" },
    { ruta: "fundicion", etiqueta: "Fundición", icono: "bi-gear" },
    { ruta: "alertas", etiqueta: "Alertas", icono: "bi-bell" },
  ];

  constructor(private datos: TennoDataService) {
    this.tenno = this.datos.getTenno();
  }
}
