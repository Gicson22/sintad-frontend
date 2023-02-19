import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { ILogin } from 'src/app/commons/interfaces/login.interface';
import { LoginEndpoint } from '../../endpoints/login.endpoint';

@Component({
  selector: 'app-login',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
})
export class LoginContainer implements OnInit {
  public isAttemptLoginSuccess: boolean = true;

  constructor(private loginEndpoint: LoginEndpoint, private router: Router) {}

  ngOnInit(): void {}

  public onLogin(data: ILogin): void {
    this.loginEndpoint
      .login(data)
      .pipe(
        catchError(() => {
          this.isAttemptLoginSuccess = false;
          return of();
        }),
        tap((response) =>
          localStorage.setItem('bearer', response.headers.get('Authorization')!)
        ),
        tap(() => this.router.navigate(['/home']))
      )
      .subscribe();
  }
}
