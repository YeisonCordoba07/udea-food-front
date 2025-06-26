import { Component, OnInit } from '@angular/core';
import {SearchService} from "@core/services/search.service";
import {Router} from "@angular/router";
import {LoginService} from "@core/services/login/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogged$ = this.loginService.isLogged$;
  currentAccount = this.loginService.currentAccount$;

  constructor(private readonly searchService: SearchService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  search(query: string): void {
    this.searchService.searchByName(query);

    this.router.navigate(['/resultados'], {
      queryParams: { q: query }
    });

  }

  openLoginPage() {
    this.router.navigate(['/login']);
  }


  openRegisterPage() {
    this.router.navigate(['/registro']);
  }



}
