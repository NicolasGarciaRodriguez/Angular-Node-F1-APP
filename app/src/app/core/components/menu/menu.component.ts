import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public isDisplay: boolean = true
  public toggleDisplay() {
    this.isDisplay = !this.isDisplay
  }

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.doLogout();
    this.router.navigate([""])
  }

}
