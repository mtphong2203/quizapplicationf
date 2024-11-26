import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public registerForm: FormGroup;

  /**
   *
   */
  constructor() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', Validators.maxLength(20)),
      lastname: new FormControl('', Validators.maxLength(20)),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.maxLength(10)),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required)
    });
  }

  public onSubmit(): void {
    console.log(this.registerForm.value);
  }

}
