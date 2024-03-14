import { Component } from '@angular/core';
import { injectName } from './providers';

@Component({
  template: 'name is {{name}}',
  standalone: true,
  selector: 'app-name',
})
export class NameComponent {
  readonly name = injectName();
}
