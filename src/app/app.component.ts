import {Component, inject, OnInit} from '@angular/core';
import {LoginService} from "@core/services/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'udea-food-front';

  loginService = inject(LoginService);

  ngOnInit(): void {
    this.loginService.checkSession();
  }

}
