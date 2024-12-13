import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AUTH_SERVICE } from '../../../constants/injection.constant';
import { IAuthService } from '../../services/auth/auth.interface';
import { LoginResponse } from '../../../models/auth/login-response.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService, private router: Router) { }

  ngOnInit(): void {

    this.createForm();
  }
  private createForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.maxLength(10))
    });
  }

  public onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe((result) => {
      if (result) {
        this.router.navigate(['/']);
      }
    })
  }

}
