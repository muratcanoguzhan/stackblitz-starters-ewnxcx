import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ProvideNameDirective } from './provide-name.directive';
import { NameComponent } from './name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <input type="text" placeholder="name" [(ngModel)]="name" />
    <ng-container *provideName="name">
      <app-name />
    </ng-container>
  `,
  imports: [NameComponent, ProvideNameDirective, FormsModule],
})
export class App {
  name = '';
}

bootstrapApplication(App);
