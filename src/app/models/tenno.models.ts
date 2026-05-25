// Modelos de datos de TennoHub

/* Perfil del jugador */
export interface Tenno {
  nombre: string;
  rangoMaestria: number;
}

/* Objeto en fabricación dentro de la Fundición */
export interface ItemFundicion {
  id: number;
  nombre: string;
  progreso: number;
  tiempoRestante: string;
  listo: boolean;
}

/* Ranura de mod en el simulador de builds */
export interface ModSlot {
  id: number;
  nombre: string | null;
  color: "coral" | "blue" | "green" | null;
}

/* Recurso necesario para un objetivo de farmeo */
export interface Recurso {
  id: number;
  nombre: string;
  cantidad: number;
  ubicacion: string;
  color: "coral" | "blue" | "green";
}

/* Evento - alerta del juego */
export interface Alerta {
  id: number;
  titulo: string;
  descripcion: string;
  tiempoRestante: string;
  relevante: boolean;
  tipo: "coral" | "blue" | "green" | "amber";
}

/* Objetivo de farmeo activo con progreso por piezas */
export interface ObjetivoFarmeo {
  nombre: string;
  piezasObtenidas: number;
  piezasTotales: number;
  siguientePieza: string;
}

/* Estadísticas calculadas de una build */
export interface EstadisticasBuild {
  danioBase: number;
  danioCritico: number;
  porcentajeEstado: number;
}
