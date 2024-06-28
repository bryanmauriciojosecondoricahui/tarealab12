// src/app/not-found/not-found.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <h2 class="not-found-heading">404 - Not Found</h2>
      <p class="not-found-message">La página que estás buscando no existe.</p>
    </div>
  `,
  styles: [`
    .not-found-container {
      text-align: center;
      margin-top: 50px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }

    .not-found-heading {
      color: #d9534f; /* Bootstrap's danger color */
    }

    .not-found-message {
      font-size: 18px;
      color: #333;
    }
  `]
})
export class NotFoundComponent { }
