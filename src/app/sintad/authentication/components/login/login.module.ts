import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginContainer } from './login.container';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LoginContainer],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [LoginContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
