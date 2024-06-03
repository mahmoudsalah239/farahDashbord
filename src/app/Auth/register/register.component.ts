import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    role: new FormControl(null, [Validators.required]),
  });

  errorMessage: string = '';
  constructor(private Auth : AuthService, private _Router: Router) { }

  onSubmit() {
    console.log(this.registerForm)
    //if (this.registerForm.invalid) {
    console.log("-------invalid=True-------")
    const formData = {
      Name: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phoneNumber,
      role: this.registerForm.value.role
    };
    this.Auth.register(formData).subscribe(
      {
        next: (respons) => {
          console.log("-----------respons----------")
          console.log(respons)
          if (respons.success == true) {
            console.log("-------success=True----------")
            this._Router.navigate(["/login"]);
          }
          else {
            console.log("-------success=False----------")
          }
        },
        error: (err) => {
          console.log("------------errrrrrrrrrrrror---------")
          console.log(err);
          if (err.error.success == false) {
            this.errorMessage=err.error.message;
          }
          console.log("------------errrrrrrrrrrrror---------")
          console.log(err)
        }
      }
    )
  }
  navigateToLogin() {
    this._Router.navigate(["/login"]);
  }
}
