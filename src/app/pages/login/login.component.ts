import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    /*const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    if (isLoggedIn) {
      this.router.navigate(['/']);
    }*/
  }

  handleLogin(event: Event): void {
    event.preventDefault();

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const credentials = this.loginForm.value;

  }

  get username(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }


}
