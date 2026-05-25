import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HomeComponent } from './components/home/home';
import { WarframesComponent } from './components/warframes/warframes';
import { NoticiasComponent } from './components/noticias/noticias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, WarframesComponent, NoticiasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'companion-app';
}