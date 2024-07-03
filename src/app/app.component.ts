import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
    <header class="band-name">
      <img src="/assets/logo.svg" alt="logo" class="band-logo" aria-hidden="true">
    </header>
    <section>
    <form action="">
      <input type="text" placeholder="filter by city">
      <button type="button" class="primary">Search</button>
    </form>
    <router-outlet />
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'homes';
}
