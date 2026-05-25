import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TennoDataService } from "../../services/tenno-data.service";
import { ResaltarUrgenteDirective } from "../../directives/resaltar-urgente.directive";
import { Alerta } from "../../models/tenno.models";

// COMPONENTE 5 — Alertas Inteligentes

@Component({
  selector: "app-alertas",
  standalone: true,
  imports: [CommonModule, FormsModule, ResaltarUrgenteDirective],
  templateUrl: "./alertas.component.html",
  styleUrl: "./alertas.component.scss",
})
export class AlertasComponent {
  relevantes: Alerta[];
  secundarias: Alerta[];

  // Modelo enlazado al interruptor de filtro con ngModel
  soloRelevantes = false;

  constructor(private datos: TennoDataService) {
    this.relevantes = this.datos.getAlertasRelevantes();
    this.secundarias = this.datos.getAlertasSecundarias();
  }

  /* Clase de chip de tiempo según el tipo de alerta. */
  claseChip(tipo: string): string {
    return `th-chip th-chip--${tipo}`;
  }
}
