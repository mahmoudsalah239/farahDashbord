import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(private Auth: AuthService, private _Router: Router) { }
  errorMessage:string='';
  onSubmit() {
    console.log(this.loginForm)
    //if (this.loginForm.invalid) {
      console.log("-------invalid=True-------")
      const formData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.Auth.login(formData).subscribe(
        {
          next: (respons) => {
            if (respons.success == true) {
              console.log("-------success=True----------")
              console.log(respons)
              localStorage.setItem("userToken",respons.data.token);
              this.Auth.setInformaionOfUser();
              this._Router.navigate(["/home"]);
            }
            else {
              console.log("-------success=False----------")
            }
          },
          error:(err)=>{
            console.log(err.error)
            this.errorMessage=err.error.message;
          }
        }
      )
    }
    navigateToRegister(){
      this._Router.navigate(["/register"]);
    }
}