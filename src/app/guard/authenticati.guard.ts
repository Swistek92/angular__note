import { inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class LoginGuard {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.isLoggedUser()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

export const authenticatiGuard: CanActivateFn = (): boolean => {
  return inject(LoginGuard).canActivate();
};
