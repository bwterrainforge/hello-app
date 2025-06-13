import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hello-form.component.html'
})
export class HelloFormComponent {
  name = '';
  response = '';

  constructor(private http: HttpClient) {}

  submit() {
    this.http.post<{ message: string }>('/api/hello', { name: this.name }).subscribe(
      (res) => (this.response = res.message),
      (err) => (this.response = 'Error: ' + err.message)
    );
  }
}
