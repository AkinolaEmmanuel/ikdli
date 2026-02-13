import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  // Replace with your actual Formspree form ID from https://formspree.io
  private formspreeUrl = 'https://formspree.io/f/meelavrk';

  constructor(private http: HttpClient) { }

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const payload = {
      name: `${this.formData.firstName} ${this.formData.lastName}`,
      email: this.formData.email,
      interest: this.formData.interest,
      message: this.formData.message,
      _subject: `IKDLI Inquiry: ${this.formData.interest || 'General'}`
    };

    this.http.post(this.formspreeUrl, payload, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.submitStatus = 'success';
        this.isSubmitting = false;
        this.formData = { firstName: '', lastName: '', email: '', interest: '', message: '' };
      },
      error: () => {
        this.submitStatus = 'error';
        this.isSubmitting = false;
      }
    });
  }
}
