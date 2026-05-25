import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TennoDataService } from "../../services/tenno-data.service";
import { ResaltarUrgenteDirective } from "../../directives/resaltar-urgente.directive";
import { ItemFundicion } from "../../models/tenno.models";

// COMPONENTE 4 — Fundición Remota

@Component({
  selector: "app-fundicion",
  standalone: true,
  imports: [CommonModule, ResaltarUrgenteDirective],
  templateUrl: "./fundicion.component.html",
  styleUrl: "./fundicion.component.scss",
})
export class FundicionComponent {
  fundicion: ItemFundicion[];

  constructor(private datos: TennoDataService) {
    this.fundicion = this.datos.getFundicion();
  }

  /* Objetos que aún se están fabricando. */
  get enProgreso(): ItemFundicion[] {
    return this.fundicion.filter((i) => !i.listo);
  }

  /* Objetos terminados y listos para reclamar. */
  get listos(): ItemFundicion[] {
    return this.fundicion.filter((i) => i.listo);
  }

  /* Reclama un objeto. */
  reclamar(item: ItemFundicion): void {
    this.datos.reclamar(item.id);
    this.fundicion = this.datos.getFundicion();
  }

  /* Genera el gradiente cónico del anillo de progreso. */
  anilloGradiente(item: ItemFundicion): string {
    const grados = (item.progreso / 100) * 360;
    return `conic-gradient(var(--th-coral) 0deg ${grados}deg, var(--th-border) ${grados}deg 360deg)`;
  }
}
