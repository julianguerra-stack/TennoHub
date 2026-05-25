import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class NoticiasComponent {

  filtro = '';
  soloRelevantes = false;

  alertas = [
    { titulo: 'Operación: Ángel de Zarimon', descripcion: 'Evento de tiempo limitado con recompensas exclusivas.', tipo: 'coral', tiempoRestante: '2d 4h', relevante: true },
    { titulo: 'Alerta: Neurodes x50', descripcion: 'Misión en Lua con recompensa de Neurodes.', tipo: 'blue', tiempoRestante: '45min', relevante: true },
    { titulo: 'Invasión: Corpus vs Grineer', descripcion: 'Elige un bando y gana recompensas únicas.', tipo: 'amber', tiempoRestante: '12h', relevante: false },
    { titulo: 'Sortie diaria', descripcion: 'Tres misiones encadenadas con recompensas de Riven.', tipo: 'coral', tiempoRestante: '6h', relevante: true }
  ];

  noticias = [
    { tipo: 'update', titulo: 'Parche 2.0.21', fecha: '2024-06-01', detalle: 'Correcciones de bugs en misiones de Duviri y mejoras de rendimiento.', verMas: false },
    { tipo: 'stream', titulo: 'DevStream #180', fecha: '2024-05-28', detalle: 'El equipo presenta las novedades de la próxima actualización mayor.', verMas: false },
    { tipo: 'evento', titulo: 'Operación: Ángel de Zarimon', fecha: '2024-05-20', detalle: 'Evento de tiempo limitado. Completa misiones para obtener el Cinta de Zarimon.', verMas: false },
    { tipo: 'update', titulo: 'Jade Shadows ya disponible', fecha: '2024-05-15', detalle: 'Nueva Warframe, nueva historia y nuevas misiones de la Reserva Void.', verMas: false },
    { tipo: 'prime', titulo: 'Inaros Prime Access', fecha: '2024-05-10', detalle: 'El faraón del desierto regresa con accesorios y armas Prime exclusivas.', verMas: false }
  ];

  alertasFiltradas() {
    return this.soloRelevantes ? this.alertas.filter(a => a.relevante) : this.alertas;
  }

  noticiasFiltradas() {
    return this.noticias.filter(n =>
      n.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
      n.tipo.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  toggleDetalle(noticia: any) { noticia.verMas = !noticia.verMas; }

  colorTipo(tipo: string): string {
    const colores: any = { coral: '#ef9a9a', blue: '#4fc3f7', amber: '#ffb74d' };
    return colores[tipo] || '#4fc3f7';
  }
}
