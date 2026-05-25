import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  recomendadoSub = 'Basado en tu progreso de Lex Prime';
  itemSeleccionado: any = null;

  ciclos = [
    { nombre: 'Cetus', estado: 'Día', tiempo: '1h restante', icono: '☀️', img: 'cetus.png' },
    { nombre: 'Deimos', estado: 'Ciclo de Vome', tiempo: '1h restante', icono: '🔵', img: 'deimos.png' },
    { nombre: 'Duviri', estado: 'Espiral de la Ira', tiempo: '1h restante', icono: '⚪', img: 'duviri.png' }
  ];

  recomendados = [
    { nombre: 'Reliquia Axi V18', tipo: 'Culata de Lex Prime', progreso: '⚪⚪⚪', icono: '🔮', tier: 'axi', descripcion: 'Abre esta reliquia en misiones Axi para obtener la culata de Lex Prime.' },
    { nombre: 'Reliquia Neo A2', tipo: 'Cañón de Lex Prime', progreso: '⚪⚪⚪', icono: '🔮', tier: 'neo', descripcion: 'Necesitas el cañón de Lex Prime. Búscala en rotaciones Neo.' },
    { nombre: 'Reliquia Requiem', tipo: 'Plano de adaptador exilus', progreso: '⚪⚪⚪', icono: '🔮', tier: 'lith', descripcion: 'El adaptador exilus te permite agregar mods adicionales a tu arma.' }
  ];

  seleccionarRecomendado(item: any) {
    this.itemSeleccionado = this.itemSeleccionado === item ? null : item;
  }
}