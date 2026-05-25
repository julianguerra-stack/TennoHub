import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-warframes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './warframes.html',
  styleUrl: './warframes.css'
})
export class WarframesComponent {

  busqueda = '';
  frameSeleccionado: any = null;

  // ── Perfil
  usuario = {
    nombre: 'Tenno_DRK',
    rango: 'Maestro Rango 15',
    clan: 'Clan Tenno',
    stats: [
      { label: 'Horas jugadas', valor: '1,240' },
      { label: 'Misiones', valor: '3,580' },
      { label: 'Warframes', valor: '12' },
      { label: 'Platino', valor: '450' }
    ]
  };

  warframes = [
    { nombre: 'Excalibur', tipo: 'Equilibrado', nivel: 30, forma: '3x', img: 'Excalibur.webp', descripcion: 'El Warframe más versátil, ideal para principiantes.' },
    { nombre: 'Rhino', tipo: 'Tanque', nivel: 30, forma: '2x', img: 'Rhino.webp', descripcion: 'El más resistente, perfecto para misiones difíciles.' },
    { nombre: 'Mesa', tipo: 'Pistolero', nivel: 30, forma: '4x', img: 'Mesa.png', descripcion: 'Daño masivo con sus pistolas Reguladoras.' },
    { nombre: 'Loki', tipo: 'Sigilo', nivel: 28, forma: '1x', img: 'Loki.webp', descripcion: 'Especialista en invisibilidad y engaño.' },
    { nombre: 'Volt', tipo: 'Velocidad', nivel: 25, forma: '2x', img: 'Volt.webp', descripcion: 'Maestro de la electricidad, ideal para misiones rápidas.' },
    { nombre: 'Mag', tipo: 'Control', nivel: 20, forma: '0x', img: 'Mag.webp', descripcion: 'Manipula campos magnéticos para controlar el battlefield.' }
  ];

  // ── Simulador de build
  buildWarframe = 'Excalibur';
  buildArma = 'Lex Prime';
  buildWarframes = ['Excalibur', 'Rhino', 'Mesa', 'Loki', 'Volt', 'Mag'];
  buildArmas = ['Lex Prime', 'Braton Prime', 'Tigris Prime', 'Soma Prime', 'Boltor Prime'];

  modsDisponibles = ['Serration', 'Split Chamber', 'Point Strike', 'Vital Sense', 'Cryo Rounds', 'Malignant Force', 'Infected Clip', 'High Voltage'];

  ranuras: { nombre: string | null; color: string }[] = Array(8).fill(null).map(() => ({ nombre: null, color: '' }));

  get estadisticas() {
    const ocupadas = this.ranurasOcupadas();
    return {
      danioBase: (1000 + ocupadas * 250).toLocaleString(),
      danioCritico: (2000 + ocupadas * 500).toLocaleString(),
      porcentajeEstado: Math.min(10 + ocupadas * 8, 100)
    };
  }

  warframesFiltrados() {
    return this.warframes.filter(f => f.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

  seleccionar(frame: any) {
    this.frameSeleccionado = this.frameSeleccionado === frame ? null : frame;
  }

  ranurasOcupadas() {
    return this.ranuras.filter(s => s.nombre !== null).length;
  }

  equiparMod(mod: string) {
    const libre = this.ranuras.find(s => s.nombre === null);
    if (libre) {
      libre.nombre = mod;
      libre.color = ['Serration', 'Split Chamber', 'Point Strike', 'Vital Sense'].includes(mod) ? 'coral' : 'blue';
    }
  }

  quitarMod(slot: any) {
    slot.nombre = null;
    slot.color = '';
  }
}
