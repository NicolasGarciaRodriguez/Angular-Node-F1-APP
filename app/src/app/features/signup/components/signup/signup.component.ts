import { Router } from '@angular/router';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparePassword } from './validators/matchValidator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;
  public submitted: boolean = false;

  constructor(public authService: AuthService, public fb: FormBuilder, public router: Router) {
    this.buildForm();
   }

  ngOnInit(): void {}


  public buildForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(35), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$")]],
      password: ['', [Validators.required]],
      repassword: [""]
    }, {
      validator: comparePassword("password", "repassword")
    })
  }

  public registerUser() {
    this.authService.signup(this.signupForm?.value).subscribe((res: any) => {
      if (res.result) {
        this.signupForm?.reset();
        this.submitted = true
        this.router.navigate(["signin"])
      }
    })
  }

}


