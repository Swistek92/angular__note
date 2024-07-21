import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router, private auth: AuthService) {}
  isLogin(): void {
    const check = this.auth.login(this.email, this.password);

    if (check) {
      this.router.navigate(['/admin']);
    } else {
      alert('smth went wrong');
    }
  }
}
