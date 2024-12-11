import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AUTH_SERVICE } from '../../../constants/injection.constant';
import { IAuthService } from '../../services/auth/auth.interface';
import { RegisterRequest } from '../../../models/auth/register-request.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.maxLength(20)),
      lastName: new FormControl('', Validators.maxLength(20)),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.maxLength(10)),
      thumbnailUrl: new FormControl('', Validators.maxLength(255)),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  public onSubmit(): void {
    this.authService.register(this.registerForm.value).subscribe((result: RegisterRequest) => {
      if (result) {
        console.log(result.id);
        this.router.navigate(['/auth/login']);
      }
    });
  }

}
