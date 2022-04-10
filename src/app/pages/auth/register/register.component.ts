import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  
  _registerForm: FormGroup;

  url = '/users';
  accessToken : string | null = '';

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) {
    this._registerForm = this.formBuilder.group({
      company: [
          '',
          Validators.required
      ],
      email: [
          '',
          Validators.required
      ],
      password: [
          '',
          Validators.required
        ],
      confirmPassword: [
          '',
          Validators.required
        ]
    })
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/dashboard')
    }
  }

  ionViewWillEnter(): void {
    this.accessToken = localStorage.getItem('accessToken')
  }


  register() {
    const values = {
      company: this._registerForm.value.company,
      email: this._registerForm.value.email,
      password: this._registerForm.value.password,
      confirmPassword: this._registerForm.value.confirmPassword,
    }
    this.authService.registerAttempt(values).subscribe((res: any) => {
      localStorage.setItem('accessToken', res.accessToken);
      this.accessToken = localStorage.getItem('accessToken');
      this.router.navigateByUrl('/dashboard')
    })
  }

}
