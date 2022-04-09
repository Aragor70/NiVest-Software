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


  ngOnInit() {}

  public _loginForm: FormGroup;
  url = '/auth';
  accessToken : string | null = '';


  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { 
    this.formBuilder.group({
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

  login() {
    this.http.post('/auth', {
      email: this._loginForm.value.email,
      password: this._loginForm.value.password,
    }).subscribe((res: any) => {
      localStorage.setItem('accessToken', res.accessToken);
      this.accessToken = localStorage.getItem('accessToken');
      this.router.navigateByUrl('/dashboard')
    })
  }

}
