
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthServiceService {
  private readonly credentials = {
    email: 'admin@example.com',
    password: 'admin123'
  };

  login(email: string, password: string): boolean {
    if (email === this.credentials.email && password === this.credentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}