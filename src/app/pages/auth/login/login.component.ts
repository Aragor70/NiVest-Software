import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  public _loginForm: FormGroup;
  url = 'http://localhost:5000/auth';
  token : string | null = '';


  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) { 
    this._loginForm = this.formBuilder.group({
      email: [
          '',
          Validators.compose([Validators.required])
        ],
      password: [
          '',
          Validators.required
        ]
    })
  }

  
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/dashboard')
    }
  }

  ionViewWillEnter(): void {
    this.token = localStorage.getItem('token')
  }


  login() {
    const values = {
      email: this._loginForm.value.email,
      password: this._loginForm.value.password,
    }
    this.authService.loginAttempt(values).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.token = localStorage.getItem('token');
      this.router.navigateByUrl('/dashboard')
    })
  }

}
