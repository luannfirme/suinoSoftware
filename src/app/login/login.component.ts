import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent  implements OnInit {

  loginForm!: FormGroup;
  isLogin: boolean = true;
  isLoading = false;
  error: string = '';
  isError: boolean = false;
  public registerButtonText: string = 'Não tem uma conta? Registra-se';

  constructor(private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
  });
  }

  register() {
    this.isLoading = true;
    this.isLogin = false;
    const { email, password } = this.loginForm.value;

  }

  redirectToRegister(): void {
    this.isLogin = !this.isLogin;
    this.registerButtonText = 'Voltar para login';
  }

  redirectToLogin(): void {
    this.isLogin = !this.isLogin;
    this.registerButtonText = 'Não tem uma conta? Registra-se';
  }

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (this.isLogin) {

    }
    this.loginForm.reset();
  }
}
