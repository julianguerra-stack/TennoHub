import { Injectable } from "@angular/core";
import {
  Tenno,
  ItemFundicion,
  ModSlot,
  Recurso,
  Alerta,
  ObjetivoFarmeo,
  EstadisticasBuild,
} from "../models/tenno.models";

// Servicio de datos de TennoHub
// En una versión real consumiría la API pública de Warframe.

@Injectable({ providedIn: "root" })
export class TennoDataService {
  //  Perfil
  private tenno: Tenno = { nombre: "Tenno", rangoMaestria: 16 };

  getTenno(): Tenno {
    return this.tenno;
  }

  //  Fundición
  private fundicion: ItemFundicion[] = [
    {
      id: 1,
      nombre: "Excalibur Chassis",
      progreso: 65,
      tiempoRestante: "4h 20m",
      listo: false,
    },
    {
      id: 2,
      nombre: "Nikana Prime",
      progreso: 100,
      tiempoRestante: "0h 00m",
      listo: true,
    },
  ];

  getFundicion(): ItemFundicion[] {
    return this.fundicion;
  }

  /* Reclama un objeto listo y lo retira de la cola. */
  reclamar(id: number): void {
    this.fundicion = this.fundicion.filter((item) => item.id !== id);
  }

  //  Objetivo de farmeo
  private objetivo: ObjetivoFarmeo = {
    nombre: "Ash Prime Set",
    piezasObtenidas: 3,
    piezasTotales: 4,
    siguientePieza: "Ash Prime Neuroptics",
  };

  getObjetivo(): ObjetivoFarmeo {
    return this.objetivo;
  }

  //  Recursos
  private recursos: Recurso[] = [
    {
      id: 1,
      nombre: "Polímero",
      cantidad: 200,
      ubicacion: "Cassini · Saturno",
      color: "coral",
    },
    {
      id: 2,
      nombre: "Plastids",
      cantidad: 150,
      ubicacion: "Piscinas · Phobos",
      color: "blue",
    },
    {
      id: 3,
      nombre: "Ferrita",
      cantidad: 600,
      ubicacion: "Coba · Ceres",
      color: "green",
    },
  ];

  getRecursos(): Recurso[] {
    return this.recursos;
  }

  //  Builds: catálogos y ranuras
  private warframes: string[] = ["Excalibur", "Volt", "Mag", "Rhino", "Frost"];
  private armas: string[] = ["Nikana", "Braton", "Soma", "Tigris", "Lex"];

  private modsDisponibles: string[] = [
    "Serration",
    "Split Chamber",
    "Point Strike",
    "Vital Sense",
    "Heavy Caliber",
    "Vile Acceleration",
    "Hammer Shot",
  ];

  private ranuras: ModSlot[] = [
    { id: 1, nombre: "Serration", color: "coral" },
    { id: 2, nombre: "Split Chamber", color: "coral" },
    { id: 3, nombre: "Point Strike", color: "coral" },
    { id: 4, nombre: null, color: null },
    { id: 5, nombre: "Vital Sense", color: "blue" },
    { id: 6, nombre: null, color: null },
    { id: 7, nombre: null, color: null },
    { id: 8, nombre: null, color: null },
  ];

  getWarframes(): string[] {
    return this.warframes;
  }
  getArmas(): string[] {
    return this.armas;
  }
  getModsDisponibles(): string[] {
    return this.modsDisponibles;
  }
  getRanuras(): ModSlot[] {
    return this.ranuras;
  }

  /* Equipa un mod en la primera ranura libre. */
  equiparMod(nombre: string): void {
    const libre = this.ranuras.find((r) => r.nombre === null);
    if (libre) {
      libre.nombre = nombre;
      libre.color = "coral";
    }
  }

  /* Quita el mod de una ranura. */
  quitarMod(id: number): void {
    const ranura = this.ranuras.find((r) => r.id === id);
    if (ranura) {
      ranura.nombre = null;
      ranura.color = null;
    }
  }

  /* Calcula las estadísticas en función de los mods equipados. */
  calcularEstadisticas(): EstadisticasBuild {
    const equipados = this.ranuras.filter((r) => r.nombre !== null).length;
    return {
      danioBase: 400 + equipados * 360,
      danioCritico: (400 + equipados * 360) * 3,
      porcentajeEstado: Math.min(equipados * 17, 100),
    };
  }

  //  Alertas
  private alertas: Alerta[] = [
    {
      id: 1,
      titulo: "Baro Ki'Teer",
      descripcion:
        "Trae Primed Pressure Point · relevante para tu build activa",
      tiempoRestante: "3h 12m",
      relevante: true,
      tipo: "coral",
    },
    {
      id: 2,
      titulo: "Fisura Abyss Era",
      descripcion: "Reliquias Ash Prime disponibles",
      tiempoRestante: "47m",
      relevante: true,
      tipo: "blue",
    },
    {
      id: 3,
      titulo: "Invasión Grineer",
      descripcion: "Recompensa: reactor Orokin",
      tiempoRestante: "1h 20m",
      relevante: false,
      tipo: "amber",
    },
    {
      id: 4,
      titulo: "Ciclo Cetus · Noche",
      descripcion: "Cacería nocturna disponible",
      tiempoRestante: "Activo",
      relevante: false,
      tipo: "green",
    },
  ];

  getAlertas(): Alerta[] {
    return this.alertas;
  }

  /* Devuelve solo las alertas relevantes para el jugador. */
  getAlertasRelevantes(): Alerta[] {
    return this.alertas.filter((a) => a.relevante);
  }

  /* Devuelve las alertas secundarias. */
  getAlertasSecundarias(): Alerta[] {
    return this.alertas.filter((a) => !a.relevante);
  }
}
