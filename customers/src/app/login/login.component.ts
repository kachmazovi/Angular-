import { Component, EventEmitter, Output } from '@angular/core';
import { LoginRegister } from '../login-register-form/login-register.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends LoginRegister {
  @Output() register = new EventEmitter();

  public title = 'Login';

  public username!: string;
  public password!: string;

  constructor() {
    super();
  }

  public login() {
    console.log(this.username, this.password);
  }
}
