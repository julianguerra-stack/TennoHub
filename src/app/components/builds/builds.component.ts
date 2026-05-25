import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TennoDataService } from "../../services/tenno-data.service";
import { ModSlot, EstadisticasBuild } from "../../models/tenno.models";

// COMPONENTE 2 — Simulador de Builds

@Component({
  selector: "app-builds",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./builds.component.html",
  styleUrl: "./builds.component.scss",
})
export class BuildsComponent {
  warframes: string[];
  armas: string[];
  modsDisponibles: string[];
  ranuras: ModSlot[];
  estadisticas: EstadisticasBuild;

  // Modelos enlazados con ngModel en los selectores
  warframeSeleccionado = "Excalibur";
  armaSeleccionada = "Nikana";

  constructor(private datos: TennoDataService) {
    this.warframes = this.datos.getWarframes();
    this.armas = this.datos.getArmas();
    this.modsDisponibles = this.datos.getModsDisponibles();
    this.ranuras = this.datos.getRanuras();
    this.estadisticas = this.datos.calcularEstadisticas();
  }

  /* Equipa un mod y recalcula las estadísticas. */
  equipar(nombre: string): void {
    this.datos.equiparMod(nombre);
    this.estadisticas = this.datos.calcularEstadisticas();
  }

  /* Quita el mod de una ranura y recalcula. */
  quitar(slot: ModSlot): void {
    if (slot.nombre) {
      this.datos.quitarMod(slot.id);
      this.estadisticas = this.datos.calcularEstadisticas();
    }
  }

  /* Número de ranuras ocupadas. */
  get ranurasOcupadas(): number {
    return this.ranuras.filter((r) => r.nombre !== null).length;
  }
}
