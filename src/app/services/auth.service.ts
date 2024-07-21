import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  login(email: string, password: string): boolean {
    if (email !== '' && password !== '') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  isLoggedUser(): boolean {
    return this.isLoggedIn;
  }
}
