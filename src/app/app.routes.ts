import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { BuildsComponent } from "./components/builds/builds.component";
import { FarmeoComponent } from "./components/farmeo/farmeo.component";
import { FundicionComponent } from "./components/fundicion/fundicion.component";
import { AlertasComponent } from "./components/alertas/alertas.component";

// Rutas de la SPA.

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "builds", component: BuildsComponent },
  { path: "farmeo", component: FarmeoComponent },
  { path: "fundicion", component: FundicionComponent },
  { path: "alertas", component: AlertasComponent },
  { path: "**", redirectTo: "" },
];
