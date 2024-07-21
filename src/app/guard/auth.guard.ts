import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ButtonClickService } from '../services/button-click.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router, private btnService: ButtonClickService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const btnClick: boolean = this.btnService.isButtonClicked();

    if (btnClick) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
