import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "@core/services/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
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

    // Simular final de envío

    if (this.loginForm.valid) {
      this.loading = true;
      const { username, password } = this.loginForm.value;

      this.loginService.login({username, password}).subscribe(
        (response)=>{
          console.log('Login successful:', response);
          this.loading = false;
          this.router.navigate(['/']);
        },
        (error)=>{
          console.error('Login failed:', error);
          this.loading = false;
        }
      )

    }
  }


  get username(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }


}
