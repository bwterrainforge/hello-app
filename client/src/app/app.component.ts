import { Component } from '@angular/core';
import { HelloFormComponent } from './hello-form/hello-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloFormComponent],
  template: '<app-hello-form />',
})
export class AppComponent {}
