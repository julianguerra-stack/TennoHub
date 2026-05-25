import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TennoDataService } from "../../services/tenno-data.service";
import { Recurso, ObjetivoFarmeo } from "../../models/tenno.models";

// COMPONENTE 3 — Rastreador de Farmeo

@Component({
  selector: "app-farmeo",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./farmeo.component.html",
  styleUrl: "./farmeo.component.scss",
})
export class FarmeoComponent {
  objetivo: ObjetivoFarmeo;
  recursos: Recurso[];
  mensaje = "";

  constructor(private datos: TennoDataService) {
    this.objetivo = this.datos.getObjetivo();
    this.recursos = this.datos.getRecursos();
  }

  /* Genera un array para dibujar los dots de progreso por piezas. */
  get dots(): boolean[] {
    return Array.from(
      { length: this.objetivo.piezasTotales },
      (_, i) => i < this.objetivo.piezasObtenidas,
    );
  }

  /* Simula la navegación al nodo de farmeo de un recurso. */
  irANodo(recurso: Recurso): void {
    this.mensaje = `Marcando ruta a ${recurso.ubicacion} para conseguir ${recurso.nombre}…`;
  }

  /* Clase del chip "Ir" según el color del recurso. */
  claseChip(recurso: Recurso): string {
    return `th-chip th-chip--${recurso.color}`;
  }
}
