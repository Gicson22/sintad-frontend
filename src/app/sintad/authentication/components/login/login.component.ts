import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ILogin } from 'src/app/commons/interfaces/login.interface';
import { LoginForm } from './login.form';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = LoginForm();

  @Input() public isAttemptLoginSuccess: boolean = true;
  @Output() public readonly login: EventEmitter<ILogin>;

  constructor() {
    this.login = new EventEmitter<ILogin>();
  }

  ngOnInit(): void {}

  public onClickLogin(): void {
    this.login.emit(this.form.value);
    this.form.reset();
  }
}
