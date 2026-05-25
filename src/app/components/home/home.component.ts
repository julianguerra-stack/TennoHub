import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { TennoDataService } from "../../services/tenno-data.service";
import { ResaltarUrgenteDirective } from "../../directives/resaltar-urgente.directive";
import {
  Tenno,
  ItemFundicion,
  ObjetivoFarmeo,
  Alerta,
} from "../../models/tenno.models";

// COMPONENTE 1 — Home

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink, ResaltarUrgenteDirective],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  tenno: Tenno;
  fundicion: ItemFundicion[];
  objetivo: ObjetivoFarmeo;
  alertaDestacada: Alerta | undefined;

  constructor(private datos: TennoDataService) {
    this.tenno = this.datos.getTenno();
    this.fundicion = this.datos.getFundicion();
    this.objetivo = this.datos.getObjetivo();
    // La primera alerta relevante se muestra como banner destacado
    this.alertaDestacada = this.datos.getAlertasRelevantes()[0];
  }

  /* Devuelve la clase del chip según el estado del crafteo. */
  claseChip(item: ItemFundicion): string {
    return item.listo ? "th-chip th-chip--green" : "th-chip th-chip--amber";
  }

  /* Color de la barra de progreso según el estado. */
  colorBarra(item: ItemFundicion): string {
    return item.listo ? "var(--th-green)" : "var(--th-coral)";
  }
}
