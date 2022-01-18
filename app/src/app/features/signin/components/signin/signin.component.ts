import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;

  constructor(public authService: AuthService, public fb: FormBuilder, public router: Router) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public buildForm() {
    this.signinForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    })
  }

  public loginUser() {
    this.authService.signIn(this.signinForm.value)
    this.router.navigate([""])
  }

}
