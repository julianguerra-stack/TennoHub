import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  menuOpen = false;

  menuItems = [
    { label: 'Inicio', active: true, href: '#inicio' },
    { label: 'Tenno', active: false, href: '#warframes' },
    { label: 'Alertas', active: false, href: '#noticias' }
  ];

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  setActive(selected: any) {
    this.menuItems.forEach(i => i.active = false);
    selected.active = true;
  }
}
