import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUsuario } from 'src/app/commons/interfaces/usuario.interface';
import { UsuarioForm } from './usuario.form';

@Component({
  selector: 'app-usuario-ui',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  form: FormGroup = UsuarioForm();

  @Input() public createdSuccefully: boolean = false;
  @Output() public readonly saveUsuario: EventEmitter<IUsuario>;
  @Output() public readonly goToLogin: EventEmitter<IUsuario>;

  constructor() {
    this.saveUsuario = new EventEmitter<IUsuario>();
    this.goToLogin = new EventEmitter<IUsuario>();
  }

  ngOnInit(): void {}

  public onClickCreateUser(): void {
    this.saveUsuario.emit(this.form.value);
    this.form.reset();
  }

  public onGoToLogin(): void {
    this.goToLogin.emit(this.form.value);
  }
}
