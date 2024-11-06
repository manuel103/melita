import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  isPasswordVisible = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      rememberMe: [true]
    });
  }

  togglePasswordVisibility() {
    if (this.isPasswordVisible) {
      this.isPasswordVisible = false;
    } else {
      this.isPasswordVisible = true;
    }
  }

  login() {
    if (this.loginForm.invalid) {
      return
    }

    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

  }
}
